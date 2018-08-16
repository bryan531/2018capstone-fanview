const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator/check');
const { matchedData, sanitize } = require('express-validator/filter');
const User = require('../models/users');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;






passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.getUserById(id, function(err, user) {
    done(err, user);
  });
});


router.get('/register', function(req, res) {
  if(req.isAuthenticated()){
    req.flash('error', 'You already have an account');
    res.redirect('/')
  } else {
    res.render('register');
  }
});

function findUserByEmail(email) {
  return new Promise(
      function(resolve, reject){
        User.getUserByEmail(email, function(err, user){
          if (user){
            reject(new Error('Email already in use'));
          } else {
            resolve(email);
          }
        })
      }
    )
}


router.post('/register', [
    
    check('email').isEmail().withMessage('must be a valid email').trim().normalizeEmail()
    .custom(value => {
      return findUserByEmail(value).then(user => {}); }),
    
    check('firstName').exists().trim().withMessage('must enter a first name')
    .isAlpha().withMessage('name must not contain numbers or special characters'),
    
    check('lastName').exists().trim().withMessage('must enter a last name')
    .isAlpha().withMessage('name must not contain numbers or special characters'),
    
    check('password', 'password must be 8 characters').isLength({ min: 8 }),
    
    check('password2').custom((value,{req, loc, path}) => {
      if (value !== req.body.password){
        throw new Error('Passwords do not match');
      } else {
        return value;
      }})
  ], (req, res, next) => {

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.mapped() });
  } else { 
    const userData = matchedData(req);
    delete userData['password2'];

    User.createUser(new User(userData), function(err, user){
      if (err) {
        throw err;
      } else {
        console.log('New user successfully created.');
      }});
    req.flash('success_msg', 'You have successfully registered a new account.');
    res.redirect('/');
  }

});


passport.use(new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password'
},
  function(username, password, done) {
    User.getUserByEmail(username, function(err, user){
      if(err) throw err;
      if(!user){
        return done(null, false, {message: 'Email was not found.'});
      }
      User.comparePassword(password, user.password, function(err, isMatch){
        if (err) throw err;
        if (isMatch){
          return done(null, user);
        } else {
          return done(null, false, {message: 'Invalid password.'})
        }
      })
    }) 
  }));

router.post('/login',
  passport.authenticate('local', {failureRedirect: "/users/login", failureFlash: true}),
  function(req, res) {
    req.flash('success_msg', 'You are now logged in');
    res.redirect('/');
  });

router.get('/login', function(req, res) {
  if(req.isAuthenticated()){
    req.flash('error_msg', 'Already logged in');
    res.redirect('/');
  } else {
    res.render('login');
  }
});

router.get('/logout', function(req, res){
  if(req.isAuthenticated()){
    req.logout();
    req.flash('success_msg', 'Successfully logged out');
    res.redirect('/users/login');
  } else {
    res.redirect('/');
  }
});


router.get('/account', function(req, res){
  if(req.isAuthenticated()){
    userData = {"email": res.locals.user.email,
                "firstName": res.locals.user.firstName,
                "lastName": res.locals.user.lastName};
    res.render('account', userData);
  } else {
    req.flash('error_msg', 'You must be logged in.');
    res.redirect('/');
  }
});


router.get('/account/newpassword', function(req, res){
  if(req.isAuthenticated()){
    res.render('passwordchange');
  } else {
    res.flash('error_msg', 'You must be logged in.');
    res.redirect('/');
  }
});

router.post('/account/newpassword', [
    check('oldPassword').custom((value,{req,loc,path}) => {
      User.comparePassword(value, loc.user.password, function(err, isMatch){
        if (isMatch) return value;
        else {throw new Error('Old password did not match.')}
      })
    }),
    check('password', 'password must be 8 characters').isLength({ min: 8 }),
    check('password2').custom((value,{req, loc, path}) => {
      if (value !== req.body.password){
        throw new Error('Passwords do not match');
      } else {
        return value;
      }})
  ],(req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.mapped() });
  } else { 
    const userData = matchedData(req);
    User.updatePassword(res.locals.email, userData.password, function(err, user){
      if (err) throw err;
      else {
        console.log('Password update');
      }});
    req.flash('success_msg', 'Successfully changed password');
    res.redirect('/accounts');
  }

});

module.exports = router;


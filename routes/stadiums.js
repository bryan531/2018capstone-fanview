const express = require('express');
const router = express.Router();
const Stadium = require('../models/stadiums');
const path = require('path');
const multer = require('multer');
const fs = require('fs');
const { check, validationResult } = require('express-validator/check');
const { matchedData, sanitize } = require('express-validator/filter');
const User = require('../models/users');



var storage = multer.diskStorage({
  destination: function(req, file, callback){
    callback(null, './public/images');
  },
  filename: function(req, file, callback){
    callback(null, 'img_' + Date.now() + path.extname(file.originalname)); 
  }
});

var upload = multer({storage: storage});




router.get('/', function(req, res) {
  Stadium.createGLP();
  Stadium.createMMP();
  res.redirect('/');
});


router.get('/images', function(req,res){
  Stadium.createImages();
  res.redirect('/');
})


router.get('/:stadium', function(req, res) {
  Stadium.getStadiumByPath('/images/' + req.params.stadium + 'stadium.png', function(err, obj){
    if (err) throw err;
    res.render('stadiumview', obj);
  });

});

router.get('/:stadium/:section', function(req, res){
  Stadium.getImages({ "stadium": req.params.stadium,"section": req.params.section },
    function(err, data){
      if (err) throw err;
      res.render('section', {"data": data, "stadium": req.params.stadium, "sectionNumber": req.params.section});
    });
});



router.get('/:stadium/:section/upload', function(req, res){
  if (req.isAuthenticated()){
    res.render('upload', {"stadiumName": req.params.stadium, "sectionNumber": req.params.section})
  } else {
    req.flash('error_msg', 'You must be logged in to upload a photo.');
    res.redirect('/stadiums/' + req.params.stadium + "/" + req.params.section);
  }

});



router.post('/:stadium/:section/upload', upload.single('userFile'), function(req, res){


  uploadData = {
    "stadium": req.params.stadium,
    "section": req.params.section,
    "photoPath": req.file.path.slice(6),
    "seatNumber": req.body.seatNumber,
    "seatRow": req.body.seatRow.toUpperCase(),
    "seatRank": req.body.rank,
    "userId": req.body.user,
    "comment": req.body.userComment
  };


  Stadium.addNewPhoto(uploadData);
  req.flash('success_msg', 'Thank you for uploading a photo!');
  res.redirect('/stadiums/' + req.params.stadium + '/' + req.params.section);



});




module.exports = router;

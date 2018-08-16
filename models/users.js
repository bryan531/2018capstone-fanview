const mongoose = require('mongoose'),
      bcrypt = require('bcryptjs');


var UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    trim: true,
    minlength: 5,
    unique: true
  },
  password: {
    type: String,
    required: true,
    minlength: 8
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  createdDate: {
    type: Date,
    default: Date.now
  }
});





var User = module.exports = mongoose.model('User', UserSchema);

module.exports.createUser = function(newUser, next){
  bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash(newUser.password, salt, function(err, hash) {
      newUser.password = hash;
      newUser.save(next);
    });
});

}


module.exports.getUserByEmail = function(email, next){
  var query = {email: email};
  User.findOne(query, next);
}


module.exports.getUserById = function(id, next){
  User.findById(id, next);
}

module.exports.comparePassword = function(candidatePassword, hash, next){
  bcrypt.compare(candidatePassword, hash, function(err, res) {
    if (err) throw err;
    next(null, res);
  });
}

module.exports.updatePassword = function(email, password, next){
  bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash(password, salt, function(err, hash) {
      User.findOneAndUpdate({"email": email}, {$set:{"password": has}}, {new:true}, function(err,doc){
        if(err){
          throw err;
        }
        console.log(doc);
      });
      next();
})})};
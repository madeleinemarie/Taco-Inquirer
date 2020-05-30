var mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({

});

const userSchema = new mongoose.Schema({
    userName: String,
    email: String,
    reviews: [reviewSchema],
    googleId: String
  }, {
    timestamps: true
 });


 module.exports = mongoose.model('User', userSchema);




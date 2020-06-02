const Review = require('../models/review');
const User = require('../models/user');
const Taco = require('../models/taco');

module.exports = {
   new: newReview,
   create,
   delete: deleteReview
}

function newReview(req, res){
    res.render('reviews/new', {restaurantId: req.params.id, tacoId: req.params.tacoid });
}

function create(req, res) {
    const review = new Review(req.body);
    review.author = req.user._id;
    review.save(function (err){
        if (err) {
            console.log(err);
            return res.redirect('/restaurants');
        }
    })
   Taco.findByIdAndUpdate(req.params.tacoid, {$push: {'reviews': review}}, function(err, taco) {
       if (err) {
           console.log(err);
           res.redirect(`/restaurants/${req.params.id}`);
       } else {
            Review.find({})
            .populate('author')
            .exec(function (err, reviews) {
                if (err) {
                    console.log(err);
                    res.redirect(`/restaurants/${req.params.id}`);
                } else {
                    res.redirect(`/restaurants/${req.params.id}`);
                }
            })
       }
   }); 
}


const Restaurant = require('../models/restaurant');
const User = require('../models/user');

module.exports = {
    index,
    show,
    new: newRestaurant,
    create
}

function index(req, res){
    Restaurant.find({}, function(err, restaurants) {
        res.render('restaurants', { restaurants });
    })
}

function show(req, res) {
    Restaurant.findById(req.params.id)  
    .populate({
        path: 'tacos',
        populate: {path: 'reviews'}
    }).
    exec(function (err, restaurant) {        
        if (err) {
            console.log(err);
            res.render('restaurants/show');
        } else {
            res.render('restaurants/show', { restaurant });
        }
    })
}

function newRestaurant(req, res) {
    res.render('restaurants/new');
}

function create(req, res){
    const restaurant = new Restaurant(req.body);
    restaurant.save(function (err){
        if (err) return console.error(err);
        res.redirect('/restaurants');
    });
}


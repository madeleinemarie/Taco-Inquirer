const Restaurant = require('../models/restaurant');
const User = require('../models/user');

module.exports = {
    index,
    show,
    new: newRestaurant,
    search,
    notFound,
    create
}

function index(req, res){
    Restaurant.find({}, function(err, restaurants) {
        res.render('restaurants', { restaurants });
    });
}

function search(req, res){
    let reqName = req.body.search;
    Restaurant.findOne({ name: new RegExp('^'+ reqName + '$', "i") })
    .populate({
        path: 'tacos',
        populate: {
            path: 'reviews', 
            model: 'Review',
            populate: {path: 'author', model: 'User'}
        }
    }).
    exec(function (err, restaurant) {
        if (err) {
            console.log(req.body)
            res.render('/restaurants/notfound');
        } else {
            if (restaurant) {
                res.redirect(`/restaurants/${restaurant._id}`);
            } else {
                res.redirect('/restaurants/notfound');
            } 
        }
    });
}

function notFound(req, res){
    res.render('restaurants/notfound');
}

function show(req, res) {
    Restaurant.findById(req.params.id)  
    .populate({
        path: 'tacos',
        populate: {
            path: 'reviews', 
            model: 'Review',
            populate: {path: 'author', model: 'User'}
        }
    }).
    exec(function (err, restaurant) {        
        if (err) {
            console.log("error:" + err);
            res.render('restaurants/');
        } else {
            res.render('restaurants/show', { restaurant });
        }
    });
}

function newRestaurant(req, res) {
    res.render('restaurants/new');
}

function create(req, res){
    const restaurant = new Restaurant(req.body);
    restaurant.save(function (err){
        if (err) return console.error(err);
        res.redirect(`/restaurants/${restaurant._id}`);
    });
}


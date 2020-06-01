const Restaurant = require('../models/restaurant');

module.exports = {
    new: newTaco,
    create
};

function newTaco(req, res) {
    res.render('tacos/new', { restaurantId: req.params.id });
}

function create(req, res) {
    Restaurant.findById(req.params.id, function(err, restaurant) {
        restaurant.tacos.push(req.body);
        restaurant.save(function(err) {
            res.redirect(`/restaurants/${restaurant._id}`);
        });
    });
}
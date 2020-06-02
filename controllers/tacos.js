const Restaurant = require('../models/restaurant');
const Taco = require('../models/taco');

module.exports = {
    new: newTaco,
    create
};

function newTaco(req, res) {
    res.render('tacos/new', { restaurantId: req.params.id });
}

function create(req, res) {
    const taco = new Taco(req.body);
    taco.save(function (err, result){
        if (err) {
            return console.error(err);
            res.redirect('/restaurants');
        } else {
            Restaurant.findByIdAndUpdate(req.params.id, {$push: {'tacos': result}}, function(err) {
                if (err) {
                    console.log(err);
                    res.redirect(`/restaurants/${req.params.id}`);
                } else {
                     res.redirect(`/restaurants/${req.params.id}`);
                }
            }); 
        }
    }); 
}
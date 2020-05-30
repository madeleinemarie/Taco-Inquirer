const User = require('../models/user');

module.exports = {
    index,
};
  

function index(req, res, next) {
    console.log(req.query)
    User.find().exec(function (err, users) {
        if (err) return next(err);
        res.render("index", {
          users,
          name: req.query.name,
          user: req.user,
        });
      });
  }
  

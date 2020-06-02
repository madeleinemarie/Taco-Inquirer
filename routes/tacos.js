const express = require('express');
const router = express.Router();
const tacosCtrl = require('../controllers/tacos');

router.get('/restaurants/:id/tacos/new', tacosCtrl.new);
router.post('/restaurants/:id/tacos', isLoggedIn, tacosCtrl.create);

function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
}

module.exports = router;
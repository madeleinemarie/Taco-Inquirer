const express = require('express');
const router = express.Router();
const restaurantsCtrl = require('../controllers/restaurants');

router.get('/', restaurantsCtrl.index);
router.get('/new', isLoggedIn, restaurantsCtrl.new);
router.post('/search', restaurantsCtrl.search);
router.get('/notfound', restaurantsCtrl.notFound);
router.get('/:id', restaurantsCtrl.show);
router.post('/', isLoggedIn, restaurantsCtrl.create);

function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
}

module.exports = router;

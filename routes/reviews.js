const express = require('express');
const router = express.Router();
const reviewCtrl = require('../controllers/reviews');

router.get('/restaurants/:id/tacos/:tacoid/reviews/new', isLoggedIn, reviewCtrl.new);
router.get('/restaurants/:id/tacos/:tacoid/reviews/:reviewid/edit', isLoggedIn, reviewCtrl.edit);
router.put('/restaurants/:id/tacos/:tacoid/reviews/:reviewid', isLoggedIn, reviewCtrl.update);
router.post('/restaurants/:id/tacos/:tacoid/reviews', isLoggedIn, reviewCtrl.create);
router.delete('/restaurants/:id/tacos/:tacoid/reviews/:reviewid', isLoggedIn, reviewCtrl.delete);

function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
}

module.exports = router;
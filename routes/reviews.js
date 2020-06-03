const express = require('express');
const router = express.Router();
const reviewCtrl = require('../controllers/reviews');

router.get('/restaurants/:id/tacos/:tacoid/reviews/new', reviewCtrl.new);
router.get('/restaurants/:id/tacos/:tacoid/reviews/:reviewid/edit', reviewCtrl.edit);
router.put('/restaurants/:id/tacos/:tacoid/reviews/:reviewid', reviewCtrl.update);
router.post('/restaurants/:id/tacos/:tacoid/reviews', reviewCtrl.create);
router.delete('/restaurants/:id/tacos/:tacoid/reviews/:reviewid', reviewCtrl.delete);

module.exports = router;
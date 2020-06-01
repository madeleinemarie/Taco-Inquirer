const express = require('express');
const router = express.Router();
const tacosCtrl = require('../controllers/tacos');

router.get('/restaurants/:id/tacos/new', tacosCtrl.new);
router.post('/restaurants/:id/tacos', tacosCtrl.create);

module.exports = router;
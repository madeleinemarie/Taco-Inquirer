const express = require('express');
const router = express.Router();
const restaurantsCtrl = require('../controllers/reviews');

router.get('/restaurants/:id/')
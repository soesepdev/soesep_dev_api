const express = require('express');
const router = express.Router();

const controller = require('../controllers/profile.controller');

router.get('/profile', controller.getProfile);
router.post('/profile', controller.updateProfile);

module.exports = router;
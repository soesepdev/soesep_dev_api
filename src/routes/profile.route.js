const express = require('express');
const router = express.Router();

const controller = require('../controllers/profile.controller');

router.get('/profile', controller.getProfile);
router.put('/profile', controller.updateProfile);

module.exports = router;
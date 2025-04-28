const express = require('express');
const router = express.Router();

const controller = require('../controllers/social.controller');

router.get('/social', controller.fetchSocial);
router.post('/social', controller.createSocial);
router.put('/social/:id', controller.updateSocialById);
router.delete('/social/:id', controller.deleteSocialById);

module.exports = router;
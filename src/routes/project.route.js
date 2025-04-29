const express = require('express');
const router = express.Router();

const controller = require('../controllers/project.controller');

router.get('/project', controller.fetchProject);

module.exports = router;
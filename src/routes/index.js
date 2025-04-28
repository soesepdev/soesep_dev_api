const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();

router.get('/', (req, res) => {
    res.json({
        message: 'Welcome'
    });
})

fs.readdirSync(__dirname).forEach((file) => {
  if (file !== 'index.js') {
    const route = require(path.join(__dirname, file));
    router.use(route);
  }
});

module.exports = router;
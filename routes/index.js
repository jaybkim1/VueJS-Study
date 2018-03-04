// Import Express and Router
var express = require('express');
var router = express.Router();

// Get Home 
router.get('/', (req, res, next) => {
  res.render('index');
});

// Get login
router.get('/login', (req, res, next) => {
    res.render('login');
});

module.exports = router;
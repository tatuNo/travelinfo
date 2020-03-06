const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../config/auth');
 
router.get('/', ensureAuthenticated, (req, res) => {
    res.render('welcome')
});

router.get('/index', (req, res) => {
    res.render('index')
});
    
module.exports = router;
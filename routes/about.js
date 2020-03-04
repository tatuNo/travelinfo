const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../config/auth');
 
router.get('/about', (req, res) => {
    res.render('about')
});
    
module.exports = router;
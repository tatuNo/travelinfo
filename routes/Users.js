const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const passport = require('passport');

// User model
const User = require('../models/User');

// Login route
router.get('/login', (req, res) => {
    res.render('login')
});

// Register route
router.get('/register', (req, res) => {
  res.render('register')
});

// Register Handle
router.post('/register', (req, res) => {
  const { name, email, password, password2} = req.body;
  let errors = [];

  //Check required fields
  if (!name || !email || !password) {
    errors.push({ msg: 'Please fill in all fields.' });
  }

  //Check password length
  if(password.length < 6) {
    errors.push({ msg: 'Password too short' });
  }

  if(errors.length > 0) {
    res.render('register', {
      errors,
      name,
      email,
      password,
      password2
    });
  } else {
    User.findOne({ email: email })
      .then(user => {
        if(user) {
          res.render('register', {
            errors,
            name,
            email,
            password,
            password2
          });
        } else {
          const newUser = new User({
            name,
            email,
            password,
            password2
          });

          // Password Hashing
          bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.password, salt, (err, hash) => {
              if(err) throw err;
              //Hashes password
              newUser.password = hash;
              // Save user to DB
              newUser.save()
                .then(user => {
                  req.flash('success_msg', 'Registeration successful!')
                  res.redirect('/users/login')
                })
                .catch(err => console.log(err));
            })
          })
        }
      });
  }
});

// Login handle
router.post('/login', (req, res, next) => {
  passport.authenticate('local', {
    successRedirect: '/index',
    failureRedirect: '/users/login',
    failureFlash: true
  })(req, res, next);
});

// Logout handle
router.get('/logout', (req, res) => {
  req.logout();
  req.flash('success_msg', 'Logged out!');
  res.redirect('/index');
});

module.exports = router;
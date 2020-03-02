if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
const bcrypt = require('bcrypt'); 
const passport = require('passport');
const flash = require('express-flash');
const session = require('express-session');
const mongo = require('mongodb');

const url = 'mongodb://localhost:3000/'

const initializePassport = require('./passport-config');
initializePassport(
    passport, 
    email => users.find(user => user.email === email),
    id => users.find(user => user.id === id)
);

const users = [];

//tell express to find all render files in views and scripts like js and css in scripts folder.
app.use(express.static(path.join(__dirname, '/views')));
app.use(express.static(path.join(__dirname, '/scripts')));

app.use(express.urlencoded({ extended: false}));

app.use(flash());
app.use(session({
    secret:process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

app.get('/', checkAuthenticated, (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'), {name: req.user.name})
});

app.get('/register.html', checkNotAuthenticated, (req, res) => {
    res.sendFile(path.join(__dirname + '/register.html'))
});

app.get('/login.html', checkNotAuthenticated, (req, res) => {
    res.sendFile(path.join(__dirname + '/login.html'))
});

app.post('/login.html', checkNotAuthenticated, passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login.html',
    failureFlash: true
}));

app.post('/register.html', checkNotAuthenticated, async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        users.push({
            id: Date.now().toString(),
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword
        });
        res.redirect('/login.html');
    } catch {
        res.redirect('/register.html');
    }
    console.log(users);
});

function checkAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }

    res.redirect('/login.html');
}

function checkNotAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        res.redirect('/');
    }
    next();
}

app.listen(process.env.PORT || 3000);
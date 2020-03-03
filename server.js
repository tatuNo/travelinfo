const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
const bcrypt = require('bcrypt'); 
const passport = require('passport');
const flash = require('express-flash');
const session = require('express-session');
const MongoClient = require('mongodb').MongoClient;
const client = new MongoClient(url);
const dbName = 'test';
const assert = require('assert');
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGOLAB_URI);

//const url = 'mongodb+srv://***REMOVED***:***REMOVED***@webtekniikka-projekti-raull.mongodb.net/test?retryWrites=true&w=majority';

var PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '/views')));
app.use(express.static(path.join(__dirname, '/scripts')));

router.get('/', function(req, res, next) {
    res.render('views/index.html');
});

router.get('/get-data', function(req, res, next){
    var resultArray = [];
    MongoClient.connect(url, function(err, client){
      assert.equal(null, err);
      const db = client.db(dbName);
      var cursor = db.collection('user-data').find();
      cursor.forEach(function(doc, err) {
          assert.equal(null, err);
          resultArray.push(doc);
      }, function(){
        client.close();
        res.render('index', {items: resultArray});
      });
    });
  });
  
  router.post('/insert', function(req, res, next) {
    var item = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    }
    MongoClient.connect(url, function(err, client){
      assert.equal(null, err);
      const db = client.db(dbName);
      db.collection('user-data').insertOne(item, function(err, result){
        assert.equal(null, err);
        console.log('Item inserted');
        client.close();
      });
    });
    res.redirect('/');
  });
  
 

router.post('/update', function(req, res, next){

});

router.post('/delete', function(req, res, next) {

});

app.listen(PORT);

module.exports = router;
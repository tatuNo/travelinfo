var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var app = express();
const mongoose = require('mongoose')

var PORT = process.env.PORT || 3000;

const mongoURI = 'mongodb+srv://***REMOVED***:***REMOVED***@webtekniikka-projekti-raull.mongodb.net/test?retryWrites=true&w=majority';

app.use(bodyParser.json());
app.use(cors());
app.use(
    bodyParser.urlencoded({
        extended: false
    })
);

mongoose
    .connect(
        mongoURI,
        { useNewUrlParser: true }
    )
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

var Users = require('./routes/Users');

app.use('/users', Users);

app.get('/', (req, res) => {
    resp.sendFile('register.html', { root: path.join(__dirname, './views')});
})




app.listen(PORT, function() {
    console.log('Server is running on port: ' + PORT)
});
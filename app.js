const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport')
const locations = require('./Routes/Api/locations')
const users = require('./Routes/Api/users')

const app = express();

// Bodyparser Middleware
app.use(bodyParser.json());

// Express body parser
app.use(express.urlencoded({ extended: false }));

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());
// Passport Config
require('./Middleware/passport')(passport);

// DB Config/Connect to mongo
const mongoose = require('mongoose');
const db = require('./Config/keys').MongoURI;
mongoose.connect(db, { useNewUrlParser: true, useCreateIndex: true })
    .then(()=> console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

// Use Routes
app.use('/Api/locations', require('./Routes/Api/locations'));
app.use('/Api/users', require('./Routes/Api/users'));

const port = process.env.PORT || 3001;

app.listen(port, () => console.log(`Server started on port ${port}`))



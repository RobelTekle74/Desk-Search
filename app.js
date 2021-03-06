const express = require('express');
const app = express();
const session = require('express-session');
const passport = require('passport');
const bodyParser = require('body-parser');



// Bodyparser Middleware
app.use(bodyParser.json())
app.use(express.urlencoded({ extended: false }));

//Passport config
require('./config/passport')(passport);
//Express session middleware
app.use(session({ secret: 'What up!' }));

//Passport middleware
app.use(passport.initialize());
app.use(passport.session());

//Mongoose and MongoDB
const mongoose = require('mongoose');
const db = require('./Config/keys').MongoURI;
mongoose.connect(db,{ useNewUrlParser: true })
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

// Use Routes
app.use('/Api/locations', require('./Routes/Api/locations'));
app.use('/users', require('./Routes/Api/users'));
// app.use('Api/auth', require('./Routes/Api/auth'))

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('client/build'));
  
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const port = process.env.PORT || 3001;

app.listen(port, () => console.log(`Server started on port ${port}`))
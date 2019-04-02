const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport')
const path = require('path')
const config = require('config')

const app = express();

// Bodyparser Middleware
app.use(express.json());

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());
// Passport Config
require('./Middleware/passport')(passport);

// DB Config && Connect to mongo

const db = config.get('mongoURI');
mongoose
    .connect(db, { 
        useNewUrlParser: true, 
        useCreateIndex: true 
    })
    .then(()=> console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

// Use Routes
app.use('/Api/locations', require('./Routes/Api/locations'));
app.use('Api/users', require('./Routes/Api/users'));
app.use('Api/auth', require('./Routes/Api/auth'))

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



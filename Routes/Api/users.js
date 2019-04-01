const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');
var passport = require('../../Middleware/passport');


// User Model
const User = require('../../Models/User');

router.get('/', (req, res) => {
    User.find()
      .sort({ date: -1 })
      .then(users => res.json(users));
  });

// @route   POST api/users
// @desc    Register new user
// @access  Public
router.post('/', (req, res) => {
  const { name, email, password, password2 } = req.body;

  // Simple validation
  if(!name || !email || !password || !password2) {
    return res.status(400).json({ msg: 'Please enter all fields' });
  }

//   Check for existing user
  User.findOne({ email })
    .then(user => {
      if(user) return res.status(400).json({ msg: 'User already exists' });

      const newUser = new User({
        name,
        email,
        password,
        password2
      });

      // Create salt & hash
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => {
              res.redirect('/login');
            })
            .catch(err => console.log(err));
        });
      })
    });
});
 
 module.exports = router;
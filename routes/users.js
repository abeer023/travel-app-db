const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.get('/test', (req, res) =>
  res.json({ msg: "this is a test" }));

router.post('/login', (req, res) => {
  const name = JSON.parse(req.body.body).username;
  User.findOne({ name: name }).then(user => {
    if (!user) {
      const newUser = new User({
        name: name
      });
      newUser
        .save()
        .then(user => res.json(user))
        .catch(err => console.log(err));
    }
    else {
      res.json({
        success: true,
        name: name,
        _id:user._id
      });
    }
  })
});

module.exports = router;
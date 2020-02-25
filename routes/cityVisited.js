const express = require('express');
const router = express.Router();
const cityVisited = require('../models/cityVisited');
router.get('/get-city-visited', function (req, res) {
    cityVisited.find({}, function (err, result) {
        res.send(result);
    })
})
router.post('/get-city-visited-by-user', function (req, res) {
    cityVisited.find({ userId: req.body.userId }, function (err, result) {
        res.send(result);
    })
})
router.post('/add-city-visited', function (req, res) {
    var data = JSON.parse(req.body.body);
    cityVisited.create({
        city: data.city,
        userId: data.userId
    }, function (err, result) {
        res.send(result);
    })
})
router.delete('/delete-city-visited', function (req, res) {
    cityVisited.findByIdAndRemove({
        _id: req.body.id
    }, function (err, result) {
        res.send(result);
    })
})
module.exports = router;

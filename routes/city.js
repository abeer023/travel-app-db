const express = require('express');
const router = express.Router();
const cityModel = require('../models/city');
const axios = require('axios');

router.get('/add-cities', function (req, res) {
    var continentId = "NA/";
    var continent = "North America";
    console.log('https://api.teleport.org/api/continents/geonames:' + continentId + 'countries/');
    axios.get('https://api.teleport.org/api/continents/geonames:' + continentId + 'countries/').then(result1 => {
        var countries = result1.data._links['country:items'];
        countries.forEach(country => {
            // console.log(country.name);
            var countryId = country.href.split(":")[2];
            axios.get('https://api.teleport.org/api/countries/iso_alpha2:' + countryId + 'admin1_divisions/').then(result2 => {
                var divisions = result2.data._links['a1:items'];
                divisions.forEach(division => {
                    var divisionId = division.href.split(":")[3];
                    axios.get('https://api.teleport.org/api/countries/iso_alpha2:' + countryId + 'admin1_divisions/geonames:' + divisionId + 'cities/').then(result3 => {
                        var cities = result3.data._links['city:items'];
                        cities.forEach(city => {
                            // cityModel.findOne({ city: city.name }).then(city1 => {
                            // if (!city1) {
                            // console.log("Adding "+city.name);
                            // const cityToAdd = new cityModel({
                            //     city: city.name,
                            //     country: country.name,
                            //     continent: continent
                            // });
                            // cityToAdd.save().catch(err => console.log(err));

                            cityModel.create({
                                city: city.name,
                                country: country.name,
                                continent: continent
                            }, function (err, result) {
                                console.log(result);
                            })
                            // }
                            // })
                        })
                    })
                })
            })
        })
        console.log("Done");
    })
})

router.get('/get-cities', function (req, res) {
    cityModel.find({}, function (err, result) {       
        res.send(result);
    })
})

module.exports = router;

// here we seperated the route handler logic from the URL
// matching logic

/* card games */
const cors = require('body-parser')
let unoData = require('../public/data/card/uno.json');
let mdealData = require('../public/data/card/mdeal.json');
let gofishData = require('../public/data/card/goFish.json');
let comments = require('../../public/data/comments.json')

exports.get_landing = function(req, res, next) {
    res.render('landing', {data:[[],[unoData, mdealData, gofishData], []]})
}

exports.uno = function(req, res, next) {
    console.log('Clicked on Uno button');
    res.render('uno', {data: unoData});
}

exports.mdeal = function(req, res, next) {
    console.log('Clicked on Monopoly Deal button');
    res.render('mdeal', {data:mdealData});
}

exports.goFish = function(req, res, next) {
    console.log('Clicked on Go Fish button');
    res.render('gofish', {data:gofishData});
}

exports.comments = function(req, res, next) {
    console.log(comments)
    res.render('comments', {data:comments})
}

/* board games */

/* dice games */

/* puzzle games */


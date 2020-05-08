// here we seperated the route handler logic from the URL
// matching logic

/* card games */
let unoData = require('../public/data/card/uno.json');
let mdealData = require('../public/data/card/mdeal.json');
let gofishData = require('../public/data/card/goFish.json');

let yatzheeData = require('../public/data/dice/yahtzee.json');
let dunNdragsData = require('../public/data/dice/dunNdrags.json');
let backgammonData = require('../public/data/dice/backgammon.json');

let monopolyData = require('../public/data/board/monopoly'); 
let sorryData = require('../public/data/board/sorry'); 
let candylandData = require('../public/data/board/candyland.json');
let count = 0; 

//let comments = require('../../public/data/comments.json'); 

exports.get_landing = function(req, res, next) {
    res.render('landing', {data:[[],[unoData, mdealData, gofishData], []]})
}

exports.arcade = function(req, res, next) {
    res.render('arcade', {data: {"title": "hope this works"}}); 
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

exports.candyland = function(req, res, next) {
    console.log('Clicked on Go Fish button');
    res.render('candyland', {data:candylandData});
}
exports.monopoly = function(req, res, next) {
    console.log('Clicked on Go Fish button');
    res.render('monopoly', {data:monopolyData});
}
exports.sorry = function(req, res, next) {
    console.log('Clicked on Go Fish button');
    res.render('sorry', {data:sorryData});
}

exports.backgammon = function(req, res, next) {
    console.log('Clicked on Go Fish button');
    res.render('backgammon', {data:backgammonData});
}
exports.dunNdrags = function(req, res, next) {
    console.log('Clicked on Go Fish button');
    res.render('dunNdrags', {data:dunNdragsData});
}
exports.yahtzee = function(req, res, next) {
    console.log('Clicked on Go Fish button');
    res.render('yahtzee', {data:yatzheeData});
}
exports.submit = function (req, res, next) {
    yatzheeData['likes'] += 1; 
    res.redirect('/yahtzee');
}
/*
exports.comments = function(req, res, next) {
    console.log(comments)
    res.render('comments', {data:comments})
}
 */


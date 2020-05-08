// noinspection ES6ConvertVarToLetConst
var express = require('express');
var router = express.Router();
//var client = require('../public/javascripts/client'); 
let landing = require('../controllers/landing');
//let index = require('../controllers/index');
//let client = require('../public/javascripts/client'); 
/* GET home page. */
// noinspection JSUnresolvedFunction
router.get('/', landing.get_landing);

// for the card games
router.get('/uno', landing.uno);
router.get('/mdeal', landing.mdeal);
router.get('/gofish', landing.goFish);

//for the board games
router.get('/monopoly', landing.monopoly);
router.get('/sorry', landing.sorry);
router.get('/candyland', landing.candyland); 

// for the dice games
router.get('/yahtzee', landing.yahtzee);
router.get('/dunNdrags', landing.dunNdrags);
router.get('/backgammon', landing.backgammon); 

router.get('/arcade', landing.arcade);
router.post('/yahtzee', landing.submit); 
// for the arcade

module.exports = router;


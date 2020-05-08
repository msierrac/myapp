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

// all the post requests
router.post('/yahtzee', landing.yahtzeeSubmit);
router.post('/backgammon', landing.backgammonSubmit);
router.post('/dunNdrags', landing.dunNdragsSubmit);

router.post('/mdeal', landing.mdealSubmit);
router.post('/uno', landing.unoSubmit);
router.post('/gofish', landing.goFishSubmit);

router.post('/candyland', landing.candylandSubmit);
router.post('/monopoly', landing.monopolySubmit);
router.post('/sorry', landing.sorrySubmit);

router.post('/', landing.yahtzeeSubmitL);
router.post('/', landing.backgammonSubmitL);
router.post('/', landing.dunNdragsSubmitL);

router.post('/', landing.mdealSubmitL);
router.post('/', landing.unoSubmitL);
router.post('/', landing.goFishSubmitL);

router.post('/', landing.candylandSubmitL);
router.post('/', landing.monopolySubmitL);
router.post('/', landing.sorrySubmitL);



// for the arcade

module.exports = router;
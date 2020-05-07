// noinspection ES6ConvertVarToLetConst
var express = require('express');
var router = express.Router();

let landing = require('../controllers/landing');
//let index = require('../controllers/index');

/* GET home page. */
// noinspection JSUnresolvedFunction
router.get('/', landing.get_landing);
router.get('/uno', landing.uno);
router.get('/mdeal', landing.mdeal);
router.get('/gofish', landing.goFish);

module.exports = router;


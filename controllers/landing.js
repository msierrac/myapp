// here we seperated the route handler logic from the URL
// matching logic
const fs = require("fs");
const resolve = require('resolve');
/* card games */
const unoFileName = '/Users/mcaceres/Courses/Spring2020/ProgParadigms/myapp/public/data/card/uno.json'; 
const mdealFileName = '/Users/mcaceres/Courses/Spring2020/ProgParadigms/myapp/public/data/card/mdeal.json';
const goFishFileName = '/Users/mcaceres/Courses/Spring2020/ProgParadigms/myapp/public/data/card/goFish.json';

const yahtzeeFileName = '/Users/mcaceres/Courses/Spring2020/ProgParadigms/myapp/public/data/dice/yahtzee.json';
const backgammonFileName = '/Users/mcaceres/Courses/Spring2020/ProgParadigms/myapp/public/data/dice/backgammon.json'; 
const dunNdragsFileName = '/Users/mcaceres/Courses/Spring2020/ProgParadigms/myapp/public/data/dice/dunNdrags.json'; 

const monopolyFileName = '/Users/mcaceres/Courses/Spring2020/ProgParadigms/myapp/public/data/board/monopoly.json'; 
const candylandFileName = '/Users/mcaceres/Courses/Spring2020/ProgParadigms/myapp/public/data/board/candyland.json';
const sorryFileName = '/Users/mcaceres/Courses/Spring2020/ProgParadigms/myapp/public/data/board/sorry.json'; 

let unoData = require(unoFileName);
let mdealData = require(mdealFileName);
let gofishData = require(goFishFileName);
let yahtzeeData = require(yahtzeeFileName);
let dunNdragsData = require(dunNdragsFileName);
let backgammonData = require(backgammonFileName);
let monopolyData = require(monopolyFileName);
let sorryData = require(sorryFileName);
let candylandData = require(candylandFileName);

//let comments = require('../../public/data/comments.json'); 

exports.get_landing = function(req, res, next) {
    res.render('landing', {data:[[],[unoData, mdealData, gofishData], []]})
}

exports.arcade = function(req, res, next) {
    res.render('arcade', {data: {"title": "hope this works"}}); 
}

exports.uno = function(req, res, next) {
    res.render('uno', {data: unoData});
}

exports.mdeal = function(req, res, next) {
    res.render('mdeal', {data:mdealData});
}

exports.goFish = function(req, res, next) {
    res.render('gofish', {data:gofishData});
}

exports.candyland = function(req, res, next) {
    res.render('candyland', {data:candylandData});
}
exports.monopoly = function(req, res, next) {
    res.render('monopoly', {data:monopolyData});
}
exports.sorry = function(req, res, next) {
    res.render('sorry', {data:sorryData});
}

exports.backgammon = function(req, res, next) {
    res.render('backgammon', {data:backgammonData});
}
exports.dunNdrags = function(req, res, next) {
    res.render('dunNdrags', {data:dunNdragsData});
}
exports.yahtzee = function(req, res, next) {
    res.render('yahtzee', {data:yahtzeeData});
}

exports.unoSubmit = function (req, res, next) {
    unoData.likes += 1;
    fs.writeFile(unoFileName, JSON.stringify(unoData, null,2), function writeJSON(err) {
        if (err) return console.log(err); 
    });
    res.redirect('/uno');
}

exports.mdealSubmit = function (req, res, next) {
    mdealData.likes += 1;
    fs.writeFile(mdealFileName, JSON.stringify(mdealData, null,2), function writeJSON(err) {
        if (err) return console.log(err);
    });
    res.redirect('/mdeal');
}
exports.dunNdragsSubmit = function (req, res, next) {
    dunNdragsData.likes += 1;
    fs.writeFile(dunNdragsFileName, JSON.stringify(dunNdragsData, null,2), function writeJSON(err) {
        if (err) return console.log(err);
    });
    res.redirect('/dunNdrags');
}
exports.yahtzeeSubmit = function (req, res, next) {
    yahtzeeData.likes += 1;
    fs.writeFile(yahtzeeFileName, JSON.stringify(yahtzeeData, null,2), function writeJSON(err) {
        if (err) return console.log(err);
    });
    res.redirect('/yahtzee');
}
exports.backgammonSubmit = function (req, res, next) {
    backgammonData.likes += 1;
    fs.writeFile(backgammonFileName, JSON.stringify(backgammonData, null,2), function writeJSON(err) {
        if (err) return console.log(err);
    });
    res.redirect('/backgammon');
}
exports.sorrySubmit = function (req, res, next) {
    sorryData.likes += 1;
    fs.writeFile(sorryFileName, JSON.stringify(sorryData, null,2), function writeJSON(err) {
        if (err) return console.log(err);
    });
    res.redirect('/sorry');
}

exports.candylandSubmit = function (req, res, next) {
    candylandData.likes += 1;
    fs.writeFile(candylandFileName, JSON.stringify(candylandData, null,2), function writeJSON(err) {
        if (err) return console.log(err);
    });
    res.redirect('/candyland');
}

exports.monopolySubmit = function (req, res, next) {
    monopolyData.likes += 1;
    fs.writeFile(monopolyFileName, JSON.stringify(monopolyData, null,2), function writeJSON(err) {
        if (err) return console.log(err);
    });
    res.redirect('/monopoly');
}

exports.goFishSubmit = function (req, res, next) {
    gofishData.likes += 1;
    fs.writeFile(goFishFileName, JSON.stringify(gofishData, null,2), function writeJSON(err) {
        if (err) return console.log(err);
    });
    res.redirect('/gofish');
}

// for the landing page
exports.unoSubmitL = function (req, res, next) {
    unoData.likes += 1;
    fs.writeFile(unoFileName, JSON.stringify(unoData, null,2), function writeJSON(err) {
        if (err) return console.log(err);
    });
    res.redirect('/');
}

exports.mdealSubmitL = function (req, res, next) {
    mdealData.likes += 1;
    fs.writeFile(mdealFileName, JSON.stringify(mdealData, null,2), function writeJSON(err) {
        if (err) return console.log(err);
    });
    res.redirect('/');
}
exports.dunNdragsSubmitL = function (req, res, next) {
    dunNdragsData.likes += 1;
    fs.writeFile(dunNdragsFileName, JSON.stringify(dunNdragsData, null,2), function writeJSON(err) {
        if (err) return console.log(err);
    });
    res.redirect('/');
}
exports.yahtzeeSubmitL = function (req, res, next) {
    yahtzeeData.likes += 1;
    fs.writeFile(yahtzeeFileName, JSON.stringify(yahtzeeData, null,2), function writeJSON(err) {
        if (err) return console.log(err);
    });
    res.redirect('/');
}
exports.backgammonSubmitL = function (req, res, next) {
    backgammonData.likes += 1;
    fs.writeFile(backgammonFileName, JSON.stringify(backgammonData, null,2), function writeJSON(err) {
        if (err) return console.log(err);
    });
    res.redirect('/');
}
exports.sorrySubmitL = function (req, res, next) {
    sorryData.likes += 1;
    fs.writeFile(sorryFileName, JSON.stringify(sorryData, null,2), function writeJSON(err) {
        if (err) return console.log(err);
    });
    res.redirect('/');
}

exports.candylandSubmitL = function (req, res, next) {
    candylandData.likes += 1;
    fs.writeFile(candylandFileName, JSON.stringify(candylandData, null,2), function writeJSON(err) {
        if (err) return console.log(err);
    });
    res.redirect('/');
}

exports.monopolySubmitL = function (req, res, next) {
    monopolyData.likes += 1;
    fs.writeFile(monopolyFileName, JSON.stringify(monopolyData, null,2), function writeJSON(err) {
        if (err) return console.log(err);
    });
    res.redirect('/');
}

exports.goFishSubmitL = function (req, res, next) {
    gofishData.likes += 1;
    fs.writeFile(goFishFileName, JSON.stringify(gofishData, null,2), function writeJSON(err) {
        if (err) return console.log(err);
    });
    res.redirect('/');
}
/*
exports.comments = function(req, res, next) {
    console.log(comments)
    res.render('comments', {data:comments})
}
 */


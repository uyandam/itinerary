/*jshint esversion: 6 */
(function () {
    'use strict';
}());

let path = require('path');
let express = require('express');
let mainRouter = express.Router();


mainRouter.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'views', 'home.html'));
});

mainRouter.get('/betaversion', function (req, res) {
    res.sendFile(path.join(__dirname, 'views', 'betaversion.html'));
});

mainRouter.get('/comments', function (req, res) {
    res.sendFile(path.join(__dirname, 'views', 'comments.html'));
});

mainRouter.get('/feedback', function (req, res) {
    res.sendFile(path.join(__dirname, 'views', 'feedback.html'));
});



module.exports = mainRouter;

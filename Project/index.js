/*jshint esversion: 6 */
(function(){
    'use strict';
}());
let bodyParser = require('body-parser');

let path = require('path');
let express = require('express');
let app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mainRouter = require('./routes');

app.use(mainRouter);

app.use('/cdn', express.static('public'))


let port = process.env.PORT || 3000;
app.listen(port);
console.log("Express server running on port", port);

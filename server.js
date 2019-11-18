'use strict';
var path = require('path')
var http = require('http');
var url = require('url');
var fs = require('fs');
var port = process.env.PORT || 1337;
var parser = require("./parser")
const express = require("express");
const app = express();

const server = app.listen(7000, () => {
  console.log(`Express running → PORT ${server.address().port}`);
});

app.get('/', function(req, res) {
    var accountNumber = req.query.AN;
    console.log(accountNumber);
    var parsedAccountNumber = parser.parseAccountNumber(req.query.AN);
    console.log(parsedAccountNumber.toString());
    res.sendFile(path.join(__dirname + '/Pages/Home.html'));
});
app.get('/normalize.css', function(req, res) {
    //console.log(res);
    res.sendFile(path.join(__dirname + '/Pages/normalize.css'));
});

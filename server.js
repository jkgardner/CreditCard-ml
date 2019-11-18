'use strict';
var path = require('path');
var http = require('http');
var url = require('url');
var fs = require('fs');
var port = process.env.PORT || 1337;
var parser = require("./parser")
const express = require("express");
const app = express();

var upload = require("./processupload");



const server = app.listen(7000, () => {
  console.log(`Express running → PORT ${server.address().port}`);
  //var date = New Date();
  console.log(Date.now());
});

app.get('/', function(req, res) {
    var accountNumber = req.query.AN;
    console.log(accountNumber);
    if(req.query.AN != undefined)
    {
      var parsedAccountNumber = parser.parseAccountNumber(req.query.AN);
      console.log(parsedAccountNumber.toString());
    }
    res.sendFile(path.join(__dirname + '/Pages/Home.html'));
});

app.post('/submit-datasheet', (req, res) => {

      var result = upload.Upload(req);
      if(result != "fail")
      {
        console.log("File Path: "+result.toString());
        res.sendFile(path.join(__dirname + '/Pages/Home.html'));
      }
      else
      {
        console.log("File Path: "+result.toString());
        res.sendFile(path.join(__dirname + '/Pages/failedUpload.html'));
      }
});

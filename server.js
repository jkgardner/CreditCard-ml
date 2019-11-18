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



http.createServer(function (req, res) {
    console.log(req.url);
    if(req.url != "/favicon.ico")
    {
      var q = url.parse(req.url, true);
      var qdata = q.query;
      console.log(q.host);
      console.log(qdata.AN);
      var parsedAccountNumber = parser.parseAccountNumber(qdata.AN.toString());

      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.write(''+parsedAccountNumber);
      return res.end();
    }
    else
    {
      res.writeHead(200, {'Content-Type': 'text/html'} );
      res.write('<link rel="icon" href="./favicon.ico">');
      res.end();
      console.log('favicon requested');
      return;
    }

}).listen(port);

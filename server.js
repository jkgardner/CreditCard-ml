'use strict';
var http = require('http');
var url = require('url');
var fs = require('fs');
var port = process.env.PORT || 1337;
var parser = require("./parser")

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

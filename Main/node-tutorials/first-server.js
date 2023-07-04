var http = require('http');
var dt = require('./myfirstmodule');
var url = require('url');
var fs = require('fs');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  var q = url.parse(req.url, true).query;
  res.write(q.name+' - '+q.age+'----');
  res.end('Hello World!'+ dt.myDateTime());
}).listen(8080);
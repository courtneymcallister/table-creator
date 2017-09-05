const express = require('express');
const server = express();
const port = 8080;

server.use(express.static(__dirname + '/public'));

server.get('/', function(req, res){
  res.sendFile('index.html', {root: __dirname + '/public/html'})
});

server.listen(port, '0.0.0.0', function(){
  console.log(`now listening on ... `, port);
});

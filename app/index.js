/*
* Primary file for the API
*
*/


// Dependencies

var http = require('http');

// Server should response to all request with a string

var server = http.createServer(function(req,res){
  res.end('Hellow World\n');
});

// Start the server , and listen to port 3000

server.listen(3000,function(){
  console.log('This server is listning to port 3000\n');
});

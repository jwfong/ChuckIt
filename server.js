var express = require('express');
var http = require('http');


var app = express();
app.use(express.static('client'));

// app.get('/', function(request, response) {
//   response.sendFile(__dirname + '/client/index.html')
//   response.write('hello world');
//   response.end();
// })



console.log('The Server is Working on port 8000!!!!')
app.listen(process.env.PORT || 8000);
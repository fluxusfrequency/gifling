var express = require('express');
var app = express();

app.use(require('morgan')());
app.use(require('body-parser'));
app.use(require('method-override'));
app.use(express.static(__dirname + '/../build'));

app.get('/', function(request, response) {
  response.json({id: 1, body: 'hello, world'});
});

app.use(function(error, request, response, next) {
  response.send(500, 'BROKEN');
});

module.exports = app;

if(require.main === module) {
  var port = process.env.PORT || 8000;
  require('http').createServer(app).listen(port, function() {
    console.log('Server listening on ' + port);
  });
}

var express = require('express');
var app = express();
var publicFolder = __dirname + '/../public';

app.use(require('morgan')('combined'));
//app.use(require('body-parser'));
//app.use(require('method-override'));

app.set('view engine', 'html');
app.set('views', publicFolder);

app.engine('html', require('hogan-engine'));

app.get('/', function(req, res) {
  res.render('index', { title: 'GIFLING' });
});

app.use(express.static(publicFolder));

//app.use(function(err, req, res, next) {
  //res.status(500).send('BROKEN');
//});

module.exports = app;

if(require.main === module) {
  var port = process.env.PORT || 8000;
  require('http').createServer(app).listen(port, function() {
    console.log('Server listening on ' + port);
  });
}



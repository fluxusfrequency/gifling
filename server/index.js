var express = require('express');
var app = express();
var publicFolder = __dirname + '/../public';

app.use(require('morgan')('combined'));

app.set('view engine', 'html');
app.set('views', publicFolder);

app.engine('html', require('hogan-engine'));

app.get('/', function(req, res) {
  res.render('index', { title: 'GIFLING' });
});

app.get('/api/gifs', function(req, res) {
  res.json({
    gifs: [
      'http://media.tumblr.com/tumblr_ln0hhauHUj1qzozj1.gif',
      'http://i.imgur.com/cxaLeCe.gif',
      'http://www.clobberblog.com/wp-content/uploads/2013/06/doingitwrong.gif'
    ]
  });
});

app.use(express.static(publicFolder));

module.exports = app;

if(require.main === module) {
  var port = process.env.PORT || 8000;
  require('http').createServer(app).listen(port, function() {
    console.log('Server listening on ' + port);
  });
}



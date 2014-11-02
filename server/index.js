var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var publicFolder = __dirname + '/../public';

var GifsController = require('./controllers/gifs-controller');
var FoldersController = require('./controllers/folders-controller');

var app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());
app.set('view engine', 'ejs');
app.set('views', publicFolder);
app.engine('html', require('ejs').renderFile);

require('./connection')();

app.controllers = {
  gifs: new GifsController(),
  folders: new FoldersController()
};

require('./router')(app);

app.use(express.static(publicFolder));

module.exports = app;

if(require.main === module) {
  var port = process.env.PORT || 8000;
  require('http').createServer(app).listen(port, function() {
    console.log('Server listening on ' + port);
  });
}



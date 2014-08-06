var Router = function(app) {
  app.get('/', function(req, res) {
    res.render('index', { title: 'GIFLING' });
  });

  app.get('/api/gifs', app.controllers.gifs.index);
  app.post('/api/gifs', app.controllers.gifs.create);

  app.get('/api/folders', app.controllers.folders.index);
};

module.exports = Router;

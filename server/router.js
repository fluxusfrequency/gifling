var Router = function(app) {
  app.get('/', function(req, res) {
    res.render('index', { title: 'GIFLING' });
  });

  app.get('/api/v1/gifs', app.controllers.gifs.index);
  app.post('/api/v1/gifs', app.controllers.gifs.create);
  app.delete('/api/v1/gifs/:id', app.controllers.gifs.destroy);

  app.get('/api/v1/folders', app.controllers.folders.index);
  app.post('/api/v1/folders', app.controllers.folders.create);
  app.delete('/api/v1/folders/:id', app.controllers.folders.destroy);
};

module.exports = Router;

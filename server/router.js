var Router = function(app) {
  app.get('/', function(req, res) {
    res.render('index', { title: 'GIFLING' });
  });

  app.get('/api/v1/gifs', app.controllers.gifs.index);
  app.post('/api/v1/gifs', app.controllers.gifs.create);

  app.get('/api/v1/folders', app.controllers.folders.index);
  app.put('/api/v1/folders/:id', app.controllers.folders.update);
};

module.exports = Router;

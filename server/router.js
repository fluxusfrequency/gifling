var Router = function(app) {
  app.get('/', function(req, res) {
    res.render('index', { title: 'GIFLING' });
  });

  app.get('/api/gifs', app.controllers.gifs.index);
  //function(req, res) {
    //res.json({
      //gifs: [
        //{ id: 1, url: 'http://media.tumblr.com/tumblr_ln0hhauHUj1qzozj1.gif' },
        //{ id: 2, url: 'http://i.imgur.com/cxaLeCe.gif' },
        //{ id: 3, url: 'http://www.clobberblog.com/wp-content/uploads/2013/06/doingitwrong.gif' },
        //{ id: 4, url: 'http://31.media.tumblr.com/tumblr_m26llq2i1Y1qcj7k0o1_500.gif' },
        //{ id: 5, url: 'http://s3-ec.buzzfed.com/static/enhanced/web03/2012/5/14/13/anigif_enhanced-buzz-14098-1337018080-23.gif' },
        //{ id: 6, url: 'http://s3-ec.buzzfed.com/static/enhanced/webdr05/2013/8/1/22/anigif_enhanced-buzz-2420-1375411401-27.gif' },
        //{ id: 7, url: 'http://tremorsintoronto.files.wordpress.com/2013/03/clumsy-bambi1.gif?w=245' },
        //{ id: 8, url: 'http://whatgifs.com/wp-content/uploads/2012/03/funny-gifs-he-heard-catnip-was-half-price-off.gif' },
        //{ id: 9, url: 'http://mlkshk.com/r/100AL' },
        //{ id: 10, url: 'http://38.media.tumblr.com/7032deb968017c3981a60fe477fb206b/tumblr_n9ir7t8B1m1rc7zl1o2_400.gif' },
        //{ id: 11, url: 'http://fc06.deviantart.net/fs71/f/2014/029/c/5/bombur___deal_with_it__by_aine0686-d7486s7.gif' },
        //{ id: 12, url: 'http://i1305.photobucket.com/albums/s556/paxblueribbon/tumblr_inline_mmwx9adwUz1qz4rgp_zpsbde990cb.gif' },
        //{ id: 13, url: 'http://25.media.tumblr.com/tumblr_m960yv17aF1rdqggno1_500.gif' }
      //]
    //});
  //});
  //
  app.post('/api/gifs', app.controllers.gifs.create);

  app.get('/api/folders', function(req, res) {
    res.json({
      folders: [
        { id: 1, name: 'Cats', gifs: [2, 8, 10] },
        { id: 2, name: 'Deal With It', gifs: [11, 12] },
        { id: 3, name: 'Shaq', gifs: [13] },
        { id: 4, name: 'AGILE', gifs: [3, 5, 6, 7, 9] }
      ]
    });
  });
};

module.exports = Router;

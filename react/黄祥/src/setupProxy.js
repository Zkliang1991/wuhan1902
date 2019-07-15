const proxy = require('http-proxy-middleware');

module.exports = function (app) {
   app.use(proxy('/cats', {
      target: 'http://api.zhuishushenqi.com',
      changeOrigin: true,
   }));
   app.use(proxy('/book', {
      target: 'http://api.zhuishushenqi.com',
      changeOrigin: true,
   }));
   app.use(proxy('/mix-atoc', {
      target: 'http://api.zhuishushenqi.com',
      changeOrigin: true,
   }));
   app.use(proxy('/chapter', {
      target: 'http://chapterup.zhuishushenqi.com',
      changeOrigin: true,
   }));
   app.use(proxy('/react', {
      target: 'http://localhost:1902',
      changeOrigin: true,
   }));
};

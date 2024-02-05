const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  try {
    app.use(
      '/api',
      createProxyMiddleware({
        target: 'https://www.thecocktaildb.com',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      })
    );
  } catch (error) {
    console.log('error in setup proxy:', error);
  }
};

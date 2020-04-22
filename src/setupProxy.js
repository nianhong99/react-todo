/**
 * @Description: Do not edit
 * @Author: 年红
 * @Date: 2020-04-03 13:49:33
 * @LastEditors: 年红
 * @LastEditTime: 2020-04-03 13:50:12
 */
const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:5000',
      changeOrigin: true,
    })
  );
};
const proxy = require('http-proxy-middleware');
module.exports = function(app) {
    app.use(
        '/dev',
        proxy.createProxyMiddleware({
            target: 'http://47.241.16.13',
            changeOrigin: true,
            pathRewrite: {
                '^/dev': ''
            }
        })
    );
    app.use(
        '/pro',
        proxy.createProxyMiddleware({
            target: 'http://47.241.16.13',
            changeOrigin: true,
            pathRewrite: {
                '^/pro': ''
            }
        })
    );
};

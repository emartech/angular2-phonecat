'use strict';

module.exports = require('ngx-webpack').webpack({
  port: 4000,
  staticFiles: [
    { from: 'index.html' },
    { from: 'favicon.ico' },
    { from: 'api', to: 'api' },
    { from: 'img', to: 'img' }
  ]
});

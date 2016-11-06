'use strict';

module.exports = require('angular2-config-generator').webpack({
  staticFiles: [
    { from: 'api', to: 'api' },
    { from: 'img', to: 'img' }
  ]
});

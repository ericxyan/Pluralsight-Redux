process.env.NODE_ENV = 'test';
require('babel-register')();

require.extensions['.css'] = function() {return null;};
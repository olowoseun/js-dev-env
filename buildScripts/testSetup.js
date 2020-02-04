// This file isn't transpiled, so must use CommonJS and ES5

// register babel to transpile before our test runs.
require('babel-register')();

// disable webpack features that Mocha doesn't understand.
require.extensions['.css'] = function() {}

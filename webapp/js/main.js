// Require.js allows to configure shortcut alias
require.config({
  paths: {
    jquery: 'vendor/jquery/jquery-2.1.0-beta1',
    underscore: 'vendor/underscore/underscore-min',
    backbone: 'vendor/backbone/backbone-min'
  }
});

require([
  'app',
], function(App){
  App.initialize();
});
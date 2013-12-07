define([
  'jquery',
  'underscore',
  'backbone',
  'views/helloView',
], function($, _, Backbone, HelloView ) {
  
  var AppRouter = Backbone.Router.extend({
    routes: {
      'test': 'testAction',
      // Default
      '*actions': 'defaultAction'
    }
  });
  
  var initialize = function(){

    var app_router = new AppRouter;

    app_router.on('route:testAction', function(){
        $('body').append('Test');
    });
    
    app_router.on('route:defaultAction', function (actions) {
        var helloView = new HelloView();
        helloView.render();
    });

    Backbone.history.start();

  };
  return { 
    initialize: initialize
  };
});

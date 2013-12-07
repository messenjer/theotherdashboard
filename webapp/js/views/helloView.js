define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/hello.html'
], function($, _, Backbone, helloTemplate){

  var helloView = Backbone.View.extend({
   
    el: $(".js-hello"),
   
    initialize: function() {
      var that = this;
    },
   
    render: function(){

      $(this.el).html(helloTemplate);

      if ( $('.js-jquery') ) {
        $('.js-jquery').addClass('btn-success');
      }

      if ( $('.js-backbone') ) {
        $('.js-backbone').addClass('btn-success');
      }

    }
  
  });

  return helloView;
});
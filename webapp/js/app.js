define([
  'jquery',
  'underscore',
  'backbone'
], function($, _, Backbone, Router){
  var initialize = function(){

    if ( $('.js-jquery') ) {
      $('.js-jquery').addClass('btn-success');
    }

    if ( $('.js-backbone') ) {
      $('.js-backbone').addClass('btn-success');
    }     

  };

  return {
    initialize: initialize
  };
});
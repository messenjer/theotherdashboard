define [
  "jquery"
  "underscore"
  "backbone"
  "router"
], ($, _, Backbone, Router) ->

  class Application
    
    initialize : () ->
      Router.initialize()
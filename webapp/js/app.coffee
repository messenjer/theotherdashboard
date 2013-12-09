define [
  "jquery"
  "underscore"
  "backbone"
  "views/helloView"
], ($, _, Backbone, HelloView) ->

  class AppRouter extends Backbone.Router
    
    routes:
      test: "testAction"
      # Default
      "*actions": "defaultAction"

    constructor:() ->
      super @routes

    initialize: () ->
      
      @on "route:testAction", ->
        $("body").append "Test"

      @on "route:defaultAction", (actions) ->
        helloView = new HelloView()
        helloView.render()

      Backbone.history.start()

      return
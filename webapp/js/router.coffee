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
      
      app_router = new AppRouter
      app_router.on "route:testAction", ->
        $("body").append "Test"

      app_router.on "route:defaultAction", (actions) ->
        helloView = new HelloView()
        helloView.render()

      Backbone.history.start()
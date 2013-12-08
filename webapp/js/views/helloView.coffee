define [
  "jquery"
  "underscore"
  "backbone"
  "text!templates/hello.html"
], ($, _, Backbone, helloTemplate) ->

  class helloView extends Backbone.View

    el: '.js-hello'

    initialize: () ->
      that = this

    render: () ->
      $(@el).html helloTemplate
      $(".js-jquery").addClass "btn-success"  if $(".js-jquery")
      $(".js-backbone").addClass "btn-success"  if $(".js-backbone")
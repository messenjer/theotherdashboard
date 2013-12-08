# Load jQuery without requireJS (more compatible with jquery plugins not amd)
#define('jquery', [], function() {
#  return jQuery;
#});
#

# Require.js allows to configure shortcut alias
require.config
  paths:
    jquery: "vendor/jquery/jquery-2.1.0-beta1"
    underscore: "vendor/underscore/underscore-min"
    backbone: "vendor/backbone/backbone-min"
    bootstrap: "vendor/bootstrap/bootstrap.min"
    text: "vendor/require/text"
    templates: "../templates"

  shim:
    bootstrap:
      deps: ["jquery"]

require ["app", "bootstrap"], (App, bootstrap) ->
  app = new App()
  app.initialize()
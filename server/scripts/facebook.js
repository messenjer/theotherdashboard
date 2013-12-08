var graph = require('fbgraph');
var configFacebook = require('../access.secret').facebook;
var access_token = configFacebook.app_id + '|' + configFacebook.app_secret;

graph.setAccessToken(access_token);

var options = {
    timeout:  3000
  , pool:     { maxSockets:  Infinity }
  , headers:  { connection:  "keep-alive" }
};

graph
  .setOptions(options)
  .get("rtbfinfo/feed", function(err, res) {
    console.log(res); // retrieve rtbfinfo last post
  });
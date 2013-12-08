var unirest = require('unirest');
var configTwitter = require('../access.secret').twitter;
var urlAPI = 'https://api.twitter.com/1.1/statuses/user_timeline.json';

var Request = unirest.get(urlAPI);
Request.oauth({
    consumer_key: configTwitter.consumer_key,
    consumer_secret: configTwitter.consumer_secret,
    token: configTwitter.access_token,
    token_secret: configTwitter.access_token_secret
}).query({
  screen_name: 'rtbfinfo'
}).end(function (response) {
  console.log(response.body);
});
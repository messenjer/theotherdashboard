var unirest = require('unirest');
var urlAPI = 'http://api.geonames.org/countryInfoJSON';

var access = require('../access.secret')
var username = access.geonames.user;

var Request = unirest.get(urlAPI)
  .headers({ 'Accept': 'application/json' })
  .encoding('utf-8')
  .query({
    lang : 'fr',
    username : username
  })
  .end(function (response) {
    console.log(response.body);
  });
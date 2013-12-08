var unirest = require('unirest');
var util = require('util');
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
    var json = response.body;
    var countryList = json.geonames;
    var country, _i, _len;

    for (_i = 0, _len = countryList.length; _i < _len; _i++) {
      country = countryList[_i];
      util.print(country.countryName+"\n");
    }
  });
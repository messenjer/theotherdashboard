var unirest = require('unirest');
var urlAPI = 'http://api.geonames.org/countryInfoJSON';

var Request = unirest.get(urlAPI)
  .headers({ 'Accept': 'application/json' })
  .encoding('utf-8')
  .query({
    lang : 'fr',
    username : 'messenjer'
  })
  .end(function (response) {
    console.log(response.body);
  });
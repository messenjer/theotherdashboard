var unirest = require('unirest');
var urlAPI = 'http://api.sharedcount.com/';

var url = "http://www.rtbf.be/info/societe/detail_les-gens-intelligents-consommeraient-plus-d-alcool-que-les-gens-stupides?id=7875154";

var Request = unirest.get(urlAPI)
  .headers({ 'Accept': 'application/json' })
  .encoding('utf-8')
  .query({
    url: url
  })
  .end(function (response) {
    console.log(response.body);
  });

var url = "http://www.rtbf.be/sport/extra/detail_grosse-sensation-en-p4-38-0?id=8143119";

var Request = unirest.get(urlAPI)
  .headers({ 'Accept': 'application/json' })
  .encoding('utf-8')
  .query({
    url: url
  })
  .end(function (response) {
    console.log(response.body);
  });
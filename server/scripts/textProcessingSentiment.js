var unirest = require('unirest');
var urlAPI = 'http://text-processing.com/api/sentiment/';

var text = "Cette API est super géniale";
var language = "french";

var Request = unirest.post(urlAPI)
  .headers({ 'Accept': 'application/json' })
  .encoding('utf-8')
  .send('text='+encodeURIComponent(text))
  .send('language='+language)
  .end(function (response) {
    console.log(response.body);
  });

text = "Ceci est une mauvaise nouvelle";

var Request = unirest.post(urlAPI)
  .headers({ 'Accept': 'application/json' })
  .encoding('utf-8')
  .send('text='+encodeURIComponent(text))
  .send('language='+language)
  .end(function (response) {
    console.log(response.body);
  });

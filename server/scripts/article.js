var unirest = require('unirest');
var util = require('util');
var _ = require('underscore');
var hack = require('./hack.js');
var urlAPI = 'http://www.local.rtbf.be/api/article';

var Request = unirest.get(urlAPI)
  .headers({ 'Accept': 'application/json' })
  .encoding('utf-8')
  .query({
    id : '8153849,8153863,8153327'
  })
  .end(function (response) {
    var articleList = response.body;
    var article, _i, _len;

    for (_i = 0, _len = articleList.length; _i < _len; _i++) {
      article = articleList[_i];
      console.log(article.title);

      // Get word index list
      var articleText = article.title + article.description;
      var wordIndexList = hack.getWordIndexList(articleText);
      console.log('Different words count : ' + _.size(wordIndexList));

      // Get sentiment score
      hack.getSentimentScore(articleText, function (data) {
        console.log('Sentiment score : ' + JSON.stringify(data));
      });

      // Get social count
      var url = article.url;
      url = 'http:' + url.replace('www.local.','www.');
      hack.getSocialCount(url,function (data) { 
        console.log('Social count : ' + JSON.stringify(data));
      }); 

    }

  });
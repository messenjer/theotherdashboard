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
      var wordIndexList = hack.countWords(article.title + article.description);
      console.log('Different words count : ' + _.size(wordIndexList));
    }

  });
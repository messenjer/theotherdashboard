var unirest = require('unirest');
var util = require('util');
var _ = require('underscore');
var hack = require('./hack.js');
var urlAPI = 'http://www.local.rtbf.be/api/article';

var testArticleIdList = '8153849,8153863,8153327';
var yesterdayArticleIdList = '8153297,8153863,8153722,8153346,8153849,8153523,8153327,8153512,8153653,8153746,8153581,8153793,8153700,8153794,8153674,8153647,8153663,8153738,8153715,8153778';

var articleListId = testArticleIdList;
var articleListId = yesterdayArticleIdList;

var Request = unirest.get(urlAPI)
  .headers({ 'Accept': 'application/json' })
  .encoding('utf-8')
  .query({
    id : articleListId
  })
  .end(function (response) {
    var articleList = response.body;
    var article, _i, _len;

    for (_i = 0, _len = articleList.length; _i < _len; _i++) {
      article = articleList[_i];
      console.log('Article ' + article.id + ' - 0 : Title : ' + article.title);
      var url = article.url;
      url = 'http:' + url.replace('www.local.','www.');
      console.log('Article ' + article.id + ' - 1 : Url : ' + url);  

      getArticleWordIndexList(article);
      getArticleSentimentScore(article);
      getArticleSocialCount(article);

      console.log('Article ' + article.id + ' --------------------');

    }

  });

var getArticleWordIndexList = function (article) {

  // Get word index list
  var articleText = article.title + article.description;
  var wordIndexList = hack.getWordIndexList(articleText);
  console.log('Article ' + article.id + ' - 2 : Different words count : ' + _.size(wordIndexList));

}

var getArticleSentimentScore = function (article) {

  var articleText = article.title + article.description;
  hack.getSentimentScore(articleText, function (data) {
    console.log('Article ' + article.id + ' - 3 : Sentiment score : ' + JSON.stringify(data));
  });

}

var getArticleSocialCount = function (article) {

    var url = article.url;
    url = 'http:' + url.replace('www.local.','www.');
    hack.getSocialCount(url,function (data) { 
      console.log('Article ' + article.id + ' - 4 : Social count : ' + JSON.stringify(data));
    });

}
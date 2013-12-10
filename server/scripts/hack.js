var util = require('util');
var _ = require('underscore');

var getWordIndexList = function (text) {
  var index = {},
      words = text
              .replace(/[.,?!;()"'’-]/g, " ")
              .replace(/\s+/g, " ")
              .toLowerCase()
              .split(" ");

    words.forEach(function (word) {
        if ( word.length > 2 ) {
          if (!(index.hasOwnProperty(word))) {
              index[word] = 0;
          }
          index[word]++;
        }
    });

    return index;
}

module.exports.getWordIndexList = getWordIndexList;

var convertToPercent = function(float) {
  return Math.round(float * 100 * 10) / 10 + '%';
} 

module.exports.convertToPercent = convertToPercent;

var getSentimentScore = function (text, callback) {

  var unirest = require('unirest');
  var urlAPI = 'http://text-processing.com/api/sentiment/';
  var language = "french";

  var Request = unirest.post(urlAPI)
    .headers({ 'Accept': 'application/json' })
    .encoding('utf-8')
    .send('text='+encodeURIComponent(text))
    .send('language='+language)
    .end(function (response) {
      data = response.body;
      var result = {};
      result.label = data.label;
      result.positive = convertToPercent(data.probability.pos);
      result.neutral = convertToPercent(data.probability.neutral);
      result.negative = convertToPercent(data.probability.neg);
      callback(result);
    });
}

module.exports.getSentimentScore = getSentimentScore;

var getSocialCount = function (url, callback) {

  var unirest = require('unirest');
  var urlAPI = 'http://api.sharedcount.com/';

  var Request = unirest.get(urlAPI)
    .headers({ 'Accept': 'application/json' })
    .encoding('utf-8')
    .query({
      url: url
    })
    .end(function (response) {
      data = response.body;
      var result = {};
      result.facebook = data.Facebook.total_count;
      result.twitter = data.Twitter;
      result.share = data.Twitter + data.Facebook.share_count;
      result.total = result.facebook + result.twitter;
      callback(result);
    });

}

module.exports.getSocialCount = getSocialCount;

var getGenderScore = function (text, callback) {

  var firstnameDataList = require('./data/firstname-ethnic.json');
  var womanCount = 0;
  var manCount = 0;

  wordIndexList = getWordIndexList(text);
  _.each(wordIndexList, function (element, index, list) {
    if ( firstnameDataList[index] ) {
      var gender = firstnameDataList[index].gender;
      if ( gender == 'm' ) {
        manCount += element;
      } else if ( gender == 'f' ) {
        womanCount += element;
      } else {
        womanCount += element;
        manCount += element;
      }
    }
  });

  var result = { 'woman' : womanCount, 'man' : manCount };
  callback(result);

}
module.exports.getGenderScore = getGenderScore;

var getEthnicScore = function (text, callback) {

}  
module.exports.getEthnicScore = getEthnicScore;
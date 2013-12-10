// String

module.exports.countWords = function (text) {
  var index = {},
      words = text
              .replace(/[.,?!;()"'-]/g, " ")
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

module.exports.getSentimentScore = function (text) {

  return 1;
}

module.exports.getSocialCount = function (url, callback) {

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
      callback(result);
    });

}
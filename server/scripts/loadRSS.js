var FeedParser = require('feedparser')
  , request = require('request');

var rssUrl = 'http://rss.rtbf.be/article/rss/highlight_rtbfinfo_info-accueil.xml';

request(rssUrl)
  .pipe(new FeedParser([]))
  .on('error', function(error) {
    // always handle errors
  })
  .on('meta', function (meta) {
    // do something
  })
  .on('readable', function () {
    // do something else, then do the next thing
    var stream = this, item;
    while (item = stream.read()) {
      console.log('Got article: %s', item.title);
      console.log(' Description: %s', item.description);
    }
  })

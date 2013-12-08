/**
 * Information : https://developers.google.com/apis-explorer/#p/analytics/v3/analytics.data.ga.get
 *
 */

var params = { 
    'ids' : 'ga:9588813',
    'start-date' : 'yesterday',
    'end-date' : 'today',
    'metrics' : 'ga:pageviews,ga:uniquePageviews,ga:timeOnPage',
    'dimensions' : 'ga:pagePath',
    'max-results' : '10',
    'sort' : '-ga:pageviews'
}

var googleapis = require('googleapis');

googleapis
    .discover('analytics','v3')
    .execute(function(err, client) {
        var req1 = client.analytics.data.ga.get(params)
        req1.execute(function (err, response) {
            console.log(err);
            console.log(response);
        });
    });
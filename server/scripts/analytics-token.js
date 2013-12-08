/**
 * Copyright 2012 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var readline = require('readline');

var googleapis = require('googleapis');
var OAuth2Client = googleapis.OAuth2Client;

// Client ID and client secret are available at
// https://code.google.com/apis/console
var configGoogle = require('../access.secret').google;
var CLIENT_ID = configGoogle.client_id;
var CLIENT_SECRET = configGoogle.client_secret;
var REDIRECT_URL = configGoogle.redirect_url;

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function getAccessToken(oauth2Client, callback) {
  // generate consent page url
  var url = oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: 'https://www.googleapis.com/auth/analytics.readonly'
  });

  console.log('Visit the url: ', url);
  rl.question('Enter the code here:', function(code) {

    // request access token
    oauth2Client.getToken(code, function(err, tokens) {
      // set tokens to the client
      // TODO: tokens should be set by OAuth2 client.
      oauth2Client.credentials = tokens;
      callback && callback();
    });
  });
}

function getAnalytics(client, authClient) {

    var params = { 
        'ids' : 'ga:9588813',
        'start-date' : 'yesterday',
        'end-date' : 'today',
        'metrics' : 'ga:pageviews,ga:uniquePageviews,ga:timeOnPage',
        'dimensions' : 'ga:pagePath',
        'max-results' : '10',
        'sort' : '-ga:pageviews'
    }

    googleapis
        .discover('analytics','v3')
        .execute(function(err, client) {
            var req1 = client.analytics.data.ga.get(params)
            .withAuthClient(authClient)
            req1.execute(function (err, response) {
                console.log(err);
                console.log(response);
            });
        });
}

// load google plus v1 API resources and methods
googleapis
  .discover('analytics','v3')
  .execute(function(err, client) {

  var oauth2Client =
    new OAuth2Client(CLIENT_ID, CLIENT_SECRET, REDIRECT_URL);

  // retrieve an access token
  getAccessToken(oauth2Client, function() {
    // retrieve user profile
    getAnalytics(client, oauth2Client);
  });

});
# The other dashboard

Our project is called the other dashboard

We are fed up with the click obsession. We want other indicators for better news for a better world

## Classical Dashboard

<img src="https://raw.github.com/messenjer/theotherdashboard/master/classical-dashboard.png" alt=""/>

## Alternate Dashboard

<img src="https://raw.github.com/messenjer/theotherdashboard/master/alternate-dashboard.png" alt=""/>

## Demo

* Webmastering : http://messenjer.github.io/theotherdashboard/webapp/dashboard-1.html 
* Video Capture (Vine) : https://vine.co/v/hQUJFXF92gp 

# Technologies

* All in javascript
* NodeJS, Backbone.js
* MongoDB, Redis, Socket.io
* ...

## Client

* /webapp
* Backbone.js, Bootstrap 3, Socket.io

## Server

* /server
* Install : npm install

## Analyses tools

* /server/scripts

* article.js (script processing articles)
* hack.js (the hack libraries)

* analytics.js
* facebook.js
* geonames.js
* parseRSS.js
* parseXLS.js
* sharedcount.js
* textProcessingSentiment.js - using API : http://text-processing.com/docs/sentiment.html
* twitterSearch.js
* twitterTimeline.js

## Analyses Results

```
Article 8153297 --------------------
Article 8153297 - 0 : Title : Travailleurs détachés: accord des ministres européens dans un dossier délicat
Article 8153297 - 1 : Url : http://www.rtbf.be/info/societe/detail_travailleurs-detaches-les-ministres-europeens-analysent-le-probleme?id=8153297
Article 8153297 - 2 : Different words count : 366
Article 8153297 - 3 : Sentiment score : {"label":"neutral","positive":"54.2%","neutral":"86.4%","negative":"45.8%"}
Article 8153297 - 4 : Social count : {"facebook":51,"twitter":4,"share":15,"total":55}
Article 8153297 - 5 : Gender score : {"woman":4,"man":8}
Article 8153297 - 6 : Ethnic score : {"blanc":11,"noir":0,"arabe":0,"asiatique":0}
Article 8153327 --------------------
Article 8153327 - 0 : Title : Perquisitions chez un ancien de Saharia4Belgium: deux mandats d'arrêt
Article 8153327 - 1 : Url : http://www.rtbf.be/info/societe/detail_perquisitions-chez-un-ancien-leader-de-sharia4belgium?id=8153327
Article 8153327 - 2 : Different words count : 295
Article 8153327 - 3 : Sentiment score : {"label":"neutral","positive":"51.1%","neutral":"79.8%","negative":"48.9%"}
Article 8153327 - 4 : Social count : {"facebook":484,"twitter":16,"share":142,"total":500}
Article 8153327 - 5 : Gender score : {"woman":8,"man":17}
Article 8153327 - 6 : Ethnic score : {"blanc":20,"noir":0,"arabe":1,"asiatique":0}
Article 8153346 --------------------
...
```

### Why total gender and ethnic are not equal ? 

```
Gender score : {"woman":8,"man":17} --> total 25
Ethnic score : {"blanc":20,"noir":0,"arabe":1,"asiatique":0} --> total 21
```

Because sometimes firstname is used for woman and boy, so we increment each one. 



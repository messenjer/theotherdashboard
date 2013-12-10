var parseXlsx = require('excel'),
    util = require('util');

//var filename = 'data/firstname.xlsx';
var filename = 'data/ethnic.xlsx'; 

parseXlsx(filename, function(err, data) {
    if(err) throw err;
    // data is an array of arrays
    util.print(JSON.stringify(data));
});
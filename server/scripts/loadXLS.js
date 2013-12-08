var parseXlsx = require('excel'),
    util = require('util');

parseXlsx('data/firstname.xlsx', function(err, data) {
    if(err) throw err;
    // data is an array of arrays
    util.print(JSON.stringify(data));
});
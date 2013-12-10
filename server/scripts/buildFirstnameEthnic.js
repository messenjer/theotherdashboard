var _ = require('underscore');
var util = require('util');

var firstnameData = require('./data/firstname.json');
var ethnicData = require('./data/ethnic.json');
var ethnicNameList = ['blanc','noir','arabe','asiatique'];

var ethnicList = {};
_.each(ethnicData, function (element, index, list) {
    var name = element[0];
    var ethnicId = parseInt(element[1]) - 1;
    var ethnicName = ethnicNameList[ethnicId];
    ethnicList[name] = { 'id' : ethnicId, 'name' : ethnicName };
});


var firstnameList = {};
_.each(firstnameData, function (element, index, list) {
    
    var name = element[0];
    var gender =  element[1];
    var ethnic_name = element[2];

    if ( name.length > 3 ) {
        var data = {};
        data.name = name;
        data.gender = gender;
        data.ethnic = ethnicList[ethnic_name];
        firstnameList[name] = data;
    }

});

util.print(JSON.stringify(firstnameList));
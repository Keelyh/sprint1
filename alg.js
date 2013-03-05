var scorcho = require('./fullscorcho');

var segments = scorcho.scorcho.segments;
var tol = .1;
var dict ={};

var times = []
var durations = []

for(var i = 0; i< segments.length; i++){
	times.push(segments[i].start)
	durations.push(segments[i].duration)
	var templist = [];
	for(var j = 0; j< segments.length; j++){
		if (i!=j){
			var flag = false;
			for(var k = 0; k<12; k++){
				if(Math.abs(segments[i].pitches[k]-segments[j].pitches[k]) > tol){
					flag = true;
				}
			}
			if(flag ==false){
				templist.push(segments[j].start.toString());
			}
		}
	}
	if (templist.length >0){
		var temp = segments[i].start;

		dict[temp] = templist;
	}
}

Object.size = function(obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};

// Get the size of an object
var size = Object.size(dict);
console.log(dict);
exports.dict = dict;
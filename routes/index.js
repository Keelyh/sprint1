
/*
 * GET home page.
 */

var scorcho = require('../PhantomLimb');

exports.index = function(req, res){

var segments = scorcho.phantom.segments;
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
				templist.push(segments[j].start);
			}
		}
	}
	if (templist.length >0){
		var temp = Math.round((segments[i].start + segments[i].duration)*100)/100;

		dict[temp] = templist;
	}
}

  res.render('index', { title: 'Song Mashup' , song: 'PhantomLimb', song2: 'HEHE', dict: dict});

};

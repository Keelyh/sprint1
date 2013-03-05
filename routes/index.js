
/*
 * GET home page.
 */

var alg = require('../alg');

exports.index = function(req, res){
	var dict = JSON.stringify(alg.dict);
	console.log(dict);
  res.render('index', { title: 'Song Mashup' , song: 'ElScorcho', song2: 'phantomlimb', dict: dict});
};
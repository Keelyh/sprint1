
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Song Mashup' , song: 'Someone', song2: 'phantomlimb'});
};

/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' , song: 'littletalks', song2: 'phantomlimb'});
};
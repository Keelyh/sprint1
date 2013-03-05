var mongoose = require('mongoose');

var songschema = mongoose.Schema({ 
		name: String,
		times: [{type: mongoose.Schema.Types.ObjectId, ref: 'Time'}]
		});
var Song = mongoose.model('Song', songschema);


exports.Song = Song;

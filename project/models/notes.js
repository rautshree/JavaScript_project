var mongoose = require('mongoose');

const NoteSchema = mongoose.Schema({     /* mongoose ma user ko euta module banako */
	title: String,
	note: String,
	createdData: {
		type: Date,
		default: Date.now
	}

});


module.exports = mongoose.model('Notes', NoteSchema);   /*tyo banako module export gareko*/
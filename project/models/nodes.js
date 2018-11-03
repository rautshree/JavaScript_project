var mongoose = require('mongoose');

const noteSchema = mongoose.Schema({     /* mongoose ma user ko euta module banako */
	title: String,
	text: String,
	createdData: {
		type: Date,
		default: Date.now
	}

});


module.exports = mongoose.model('nodes', noteSchema);   /*tyo banako module export gareko*/
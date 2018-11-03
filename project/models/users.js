var mongoose = require('mongoose');

const UserSchema = mongoose.Schema({     /* mongoose ma user ko euta module banako */
	username: String,
	password: String,
	createdData: {
		type: Date,
		default: Date.now
	}

});


module.exports = mongoose.model('Users', UserSchema);   /*tyo banako module export gareko*/
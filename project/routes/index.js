var express = require('express');
var router = express.Router();

var Users = require('../models/users');
var Notes = require('../models/notes');
/* GET home page. */
router.get('/', function(req, res, next) {
	 res.render('index', { title: 'WLiT'});

});

router.get('/login', function(req, res){
	res.render('login')
});

router.get('/signup', function(req, res){
 	res.render('signup')
});

router.post('/signup', function(req, res){
	var user = new Users({
		username: req.body.username,
		password: req.body.password
	});
	var promise = user.save();
	promise.then((user) => {
		console.log('user signed up with values......', user);
	})
	// 
});



router.post('/login', function(req, res){
	if(req.body.username && req.body.password) {
		Users.findOne({username: req.body.username, password: req.body.password},function(err, user) {                   
			console.log('user login values...........', user);
			res.redirect('/');
		})
	} else {
		console.log("enter username and password");
	}
		// console.log('req....', req.body);
});

router.get('/addnote', function(req, res){
	res.render('addnote');
});

router.post('/addnote', function(req, res){
	console.log('req....', req.body);
	var note = new Notes({
		title: req.body.title,
		note: req.body.note
	})
	var promise = note.save()
	promise.then((note) => {
		console.log('saved note is:', note);
		Notes.find().exec(function(err, notes){
			res.render('viewnote', {notes})
		});
	});
});

router.get('/viewnote', function(req, res){
	Notes.find().exec(function(err, notes){

	res.render('viewnote', {notes});
	})
});

 router.delete('/deletenote/:id', function(req, res){
 	Notes.findOne({_id: req.params.id}).remove();
 })

module.exports = router;

require('es6-promise').polyfill;
require('isomorphic-fetch');

var express = require('express');
var app = express();

// app.use(express.static('public'));

app.get('/.well-known/assetlinks.json', function(req, res){
	fetch('http://39.108.234.236/.well-known/assetlinks.json')
		.then(function(resp) {
			return resp.json();
		})
		.then(function(stories) {
			res.send(stories);
		})
});

app.get('/', function(req, res){
	res.send('Hello World!');
});

app.get('/investmentdetails.html', function(req, res) {
	var projId = req.query.projectid;
	res.send('Project id is ' + projId);
});

app.listen('80');

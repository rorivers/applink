var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/', function(req, res){
	res.send('Hello World!');
});

app.get('/investmentdetails.html', function(req, res) {
	var projId = req.query.projectid;
	res.send('Project id is ' + projId);
});

app.listen('3000');

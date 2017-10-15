var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/', function(req, res){
	res.send('Hello World!');
});

app.get('/project/:id', function(req, res) {
	var projId = req.params.id;
	res.send('Project id is ' + projId);
});

app.listen('3000');
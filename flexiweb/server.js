var express = require('express');
var app = express();
var path = require('path');

//Routing 
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/src/index.html'));
});

app.get('/signin', function(req, res) {
    res.sendFile(path.join(__dirname + '/src/pages/login.html'));
});

app.get('/Patient', function(req, res) {
    res.sendFile(path.join(__dirname + '/src/pages/patientinitial.html'));
});

app.get('/Patient/JPg9A2/Dash', function(req, res) {
    res.sendFile(path.join(__dirname + '/src/pages/patientdash.html'));
});
app.get('/Patient/JPg8A2/Dash', function(req, res) {
    res.sendFile(path.join(__dirname + '/src/pages/patientdash2.html'));
});

app.get('/Patient/JPg7A2/Dash', function(req, res) {
    res.sendFile(path.join(__dirname + '/src/pages/patientdash3.html'));
});

app.get('/Patient/JPg9A2/Teleform', function(req, res) {
    res.sendFile(path.join(__dirname + '/src/pages/teleform.html'));
});

app.get('/Doctor/Mnt22v/Dash', function(req, res) {
    res.sendFile(path.join(__dirname + '/src/pages/doctordash.html'));
});
app.get('/Doctor/Mmt22v/Dash', function(req, res) {
    res.sendFile(path.join(__dirname + '/src/pages/doctordash2.html'));
});

app.get('/Checker/Indigo', function(req, res) {
    res.sendFile(path.join(__dirname + '/src/pages/checkerdash.html'));
});

app.get('/Checker/Indigo/Results', function(req, res) {
    res.sendFile(path.join(__dirname + '/src/pages/checkerresults.html'));
});



app.listen(3002);

app.use(express.static('public'))

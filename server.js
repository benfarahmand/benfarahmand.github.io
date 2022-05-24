const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 8080;

app.use('/public/', express.static(path.resolve(__dirname, 'public')));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.get('/js/papaparse.min.js', function(req, res) {
  res.sendFile(path.join(__dirname, 'public/js/papaparse.min.js'));
});

app.get('/js/app.js', function(req, res) {
  res.sendFile(path.join(__dirname, 'public/js/app.js'));
});

app.get('/js/leaflet.js', function(req, res) {
  res.sendFile(path.join(__dirname, 'public/js/leaflet.js'));
});

app.get('/css/leaflet.css', function(req, res) {
  res.sendFile(path.join(__dirname, 'public/css/leaflet.css'));
});

// res.sendFile(path.join(__dirname, '/js/getdata.js'));
// res.sendFile(path.join(__dirname, '/css/leaflet.css'));
// res.sendFile(path.join(__dirname, '/js/leaflet.js'));


app.listen(port);
console.log('Server started at http://localhost:' + port);
var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('Hello World!\n');
});

app.get('/kiran', function (req, res) {
  res.send('Hello Kiran!\n');
});

app.listen(8090, function () {
  console.log('Example app listening on port 8090!');
});


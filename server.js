const express = require('express');
const path = require('path');
// const auth = require('./server/auth.js');
const app = express();
const port = 8080;

app.use(express.static(path.join(__dirname, 'build')));

// Main consulting site
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, console.log(`Server listening on port ${port}`));

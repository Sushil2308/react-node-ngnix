const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, 'build')));

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(3000, console.log("Static File Serving from 3000"));
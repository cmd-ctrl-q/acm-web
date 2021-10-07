const express = require('express');
const path = require('path');
const app = express();
const port = process.env.ACM_PORT || 80
const url = process.env.ACM_URL || '/acm'

app.use(express.static(path.join(__dirname, 'build')));

app.get(url, function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, 
  () => console.log(`Listening on port ${port}`));

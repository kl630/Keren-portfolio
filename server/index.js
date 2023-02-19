const express = require('express');
const app = express();
const port = 8080;
const path = require('path');
app.use(express.static(__dirname + '/../dist'))
express.json();

app.get('/testing', (req, res) => {
  res.send('Hello World');
});

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});



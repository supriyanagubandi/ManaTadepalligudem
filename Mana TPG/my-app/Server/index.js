const express = require('express')
var path = require("path");
const app = express();
var unirest = require('unirest');
const Weather = require('./Routes/Weather');

app.get('/api/Weather/',Weather);
app.use('/api/Weather/',Weather);


app.use(express.static(path.join(__dirname, 'public/build')));
  
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'public/build', 'index.html'));
  });

app.listen(8000, () => {
  console.log('Example app listening on port 8000!')
});
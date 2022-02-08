const express = require('express'),
bodyParser = require('body-parser'),
cors = require('cors');
// const path = require('path');
// const http = require('http');

const app = express();

// Get our API routes
const api = require('./server/api');

// Parsers for POST data
app.use(bodyParser.json({ extended: true, 'type': '*/*',limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: false }));

// enable cors
app.use(cors());

// Set our api routes
app.use('/api', api);

app.listen(3303, () => {
  console.log(`app listening on port 3303`);
});

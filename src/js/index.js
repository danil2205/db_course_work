const express = require('express');
const bodyParser = require('body-parser');
const roles = require('./controls/controls');
const connection = require('./db/db');

const app = express();
connection.connect();

app.use(bodyParser.text());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/api', roles);

app.listen(8080, () => {
  console.log(`Service starts on http://localhost:8080`);
});

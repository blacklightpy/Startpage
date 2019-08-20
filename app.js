const fs = require('fs');
const auth = require('./authorize');
const services = require('./services');
const express = require('express');

const app = express();
const port = 3000;

app.get('/courses', (req, res) => {
  // Load client secrets from a local file.
  fs.readFile('credentials.json', (err, content) => {
    if (err) return console.log('Error loading client secret file:', err);
    // Authorize a client with credentials.
    auth.authorize(JSON.parse(content), services.getCourses, res);
  });
});

app.get('/tests', (req, res) => {
  // Load client secrets from a local file.
  fs.readFile('credentials.json', (err, content) => {
    if (err) return console.log('Error loading client secret file:', err);
    // Authorize a client with credentials.
    auth.authorize(JSON.parse(content), services.getTests, res);
  });
});

app.get('/assignments', (req, res) => {
  // Load client secrets from a local file.
  fs.readFile('credentials.json', (err, content) => {
    if (err) return console.log('Error loading client secret file:', err);
    // Authorize a client with credentials.
    auth.authorize(JSON.parse(content), services.getAssignments, res);
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});
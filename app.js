'use strict';

const express = require('express');
const cors = require('cors')

// Constants
const PORT = 80;
const HOST = '0.0.0.0';

// App
const app = express();
app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello Maria');
});

app.get('/healthCheck', (req, res) => {
    res.send("I'm healthy guys :)");
});

app.get('/journeys', (req, res) => {
    res.send("This is a journey");
});

app.get('/journeys/:journeyId', (req, res) => {
    res.send(req.params.journeyId);
});

app.post('/journeys/:journeyId', (req, res) => {
    res.send(req.params.journeyId);
});

app.put('/journeys/:journeyId', (req, res) => {
    res.send(req.params.journeyId);
});

app.delete('/journeys/:journeyId', (req, res) => {
    res.send(req.params.journeyId);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
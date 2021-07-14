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

app.get('/journey', (req, res) => {
    res.send("This is a journey");
});

app.post('/journey', (req, res) => {
    res.send("This is a journey");
});

app.put('/journey', (req, res) => {
    res.send("This is a journey");
});

app.delete('/journey', (req, res) => {
    res.send("This is a journey");
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
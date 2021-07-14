'use strict';

const express = require('express');
const cors = require('cors')
const pg = require('pg')

// Constants
const PORT = 80;
const HOST = '0.0.0.0';

const pgClient = new pg({
    user: 'CAR_SHARE_USER',
    host: 'maindb-auroradbcluster-1j5z4kof4tywz.cluster-c10zn8atghnj.ca-central-1.rds.amazonaws.com',
    database: 'CAR_SHARE',
    password: 'CARSHARESPRINGFIELD',
    port: 5432
});

pgClient.connect()
pgClient.query('SELECT NOW()', (err, res) => {
  console.log(err, res)
  pgClient.end()
})

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
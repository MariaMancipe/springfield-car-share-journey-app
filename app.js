'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Pool } = require('pg');

// Constants
const PORT = 80;
const HOST = '0.0.0.0';

const pool = new Pool();
// pool.query('SELECT NOW()', (err, res) => {
//     console.log(err, res)
//     pool.end()
// })


// App
const app = express();
app.use(cors())
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (req, res) => {
  res.send('Hello Maria');
});

app.get('/healthCheck', (req, res) => {
    res.send("I'm healthy guys :)");
});

app.get('/journeys', (req, res) => {
    pool.query('SELECT * FROM journeys ORDER BY journey_id ASC', (error, results) => {
        if (error) {
          throw error
        }
        res.status(200).json(results.rows);
    });
});

app.get('/journeys/:userId', (req, res) => {
    var id = req.params.userId
    pool.query('SELECT * FROM journeys WHERE user_id = $1',[id], (error, results) => {
        if (error) {
          throw error
        }
        res.status(200).json(results.rows);
    });
});

app.post('/journeys', (req, res) => {
    const { user_id, origin_address, origin_city, destination_address, destination_city, created_on, start_datetime } = req.body

    pool.query('INSERT INTO journeys (user_id, origin_address, origin_city, destination_address, destination_city, created_on, start_datetime) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING journey_id', [user_id, origin_address, origin_city, destination_address, destination_city, created_on, start_datetime], (error, result) => {
        if (error) {
            throw error
        }
        res.status(201).send(result.rows[0])
    });
});

app.put('/journeys/:journeyId', (req, res) => {
    var id = req.params.journeyId
    const { destination_address, destination_city, start_datetime, end_datetime } = req.body
    pool.query('UPDATE journeys SET destination_address = $1, destination_city = $2, start_datetime = $3, end_datetime = $4 WHERE journey_id=$5', [ destination_address, destination_city, start_datetime, end_datetime, id], (error, result) => {
        if (error) {
            throw error
        }
        res.status(201).send(`Journey modified with ID: ${id}`)
    })
});

app.delete('/journeys/:journeyId', (req, res) => {
    var id = req.params.journeyId
    pool.query('DELETE FROM users WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        res.status(200).send(`Journey deleted with ID: ${id}`)
    })
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
const express = require('express');
const feedback = express.Router();
const pool = require('../modules/pool');

feedback.post('/', (req, res) => {
  let feedback = req.body;
  console.log('adding feedback', feedback);
  let queryString = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments") 
                      VALUES($1, $2, $3, $4);`;
  pool.query(queryString, [feedback.feeling, feedback.understanding, feedback.support, feedback.comments])
    .then(result => {
      res.sendStatus(201, result);
    }).catch(err => {
      console.log('we are getting an error', err);
      res.sendStatus(500);
    }); // end catch
}); // end feedbackRouter POST

feedback.get('/', (req, res) => {
  console.log('GET /feedback');
  pool.query('SELECT * from "feedback" ORDER BY "id" DESC;').then((result) => {
    res.send(result.rows);
  }).catch((error) => {
    console.log('Error GET /feedback', error)
    res.sendStatus(500);
  });
})

feedback.delete('/:id', (req, res) => {
  let id = req.params.id;
  console.log(`in router deleting id: ${id}`);
  let queryString = `DELETE FROM "feedback" WHERE "id" = $1;`;
  pool.query(queryString, [id])
    .then(result => {
      res.sendStatus(201);
    }).catch(err => {
      console.log(err);
      res.sendStatus(500);
    }); // end catch
}); // end tasksRouter DELETE

feedback.put('/:id', (req, res) => {
  let id = req.params.id;
  console.log(`in router updating id: ${id}`);
  let queryString = `UPDATE "feedback" SET "flagged" = NOT "flagged" WHERE "id" = $1;`;
  pool.query(queryString, [id])
    .then(result => {
      res.sendStatus(201);
    }).catch(err => {
      console.log(err);
      res.sendStatus(500);
    }); // end catch
}); // end tasksRouter DELETE

module.exports = feedback;
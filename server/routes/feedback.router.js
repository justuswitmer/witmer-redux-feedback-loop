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

module.exports = feedback;
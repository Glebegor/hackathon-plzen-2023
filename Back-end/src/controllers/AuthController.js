const express = require("express");
const jwt = require("jsonwebtoken");
require('dotenv').config();

const pool = require('../repositories/postgres');
const Secret_key = process.env.SECRET_KEY
const router = express.Router();
const verifyToken = require("../utils/jwtUtils")

// Auth 
router.post('/login', async (req, res) => {
  try {
    const {username, password_hash} = req.body;
    const result = pool.query(
      'SELECT * FROM users WHERE username=$1 AND password_hash=$2',
      [username, password_hash]
    );
    result
    .then(result => {
      if (result.rows.length > 0) {
        const userData = result.rows[0];
        var token = userData;
        jwt.sign({"userId": userData.id,
           "userUsername": userData.username,
           "userName": userData.name, 
           "userSurname": userData.surname,
           "userIsDoctor": userData.isdoctor,
          }, 
          Secret_key, 
          { expiresIn: '3600s' },
          (err, token) => {
            if (err != undefined) {
              res.status(500);
              res.json({ "message": err.message });
            } 
            res.status(200);
            res.json({ "accessToken": token , "tokenType": "Bearer", "expiresIn": 3600 }); 
          }
        );
      } else {
        res.status(401);
        res.json({ "message": "Wrong username or password" });  
      }
    })
    .catch(error => {
      console.error(error);
      res.status(404);
      res.json({ "message": error.message })
    });

  } catch (error) {
    console.log(error.message)
    res.status(505);
    res.json({ "message": error.message });
  }
});
router.post('/register', verifyToken, async (req, res) => {
  jwt.verify(req.token, Secret_key, (err, authData) => {
    if (authData.userIsDoctor == true) {
      try {
        const {name, username, surname, password_hash, birth_certificate_number} = req.body;
        const result = pool.query(
          'INSERT INTO users (name, username, surname, password_hash, birth_certificate_number, isDoctor, date, email, telephone, insurance_number, problems, reason_id, notes_id, place, emoji_id) VALUES ($1, $2, $3, $4, $5,false, null, null, null, null, null, null, null, null, null) RETURNING *',
          [name, username, surname, password_hash, birth_certificate_number]
        )
        result
        .then(result => {
          res.status(200);
          res.json({"Status": "ok"})
        })
        .catch(error => {
          console.error(error);
          res.status(400);
          res.json({ "message": error.message });
        })
      } catch (error) {
        console.log(error.message)
        res.status(505);
        res.json({ "message": error.message });
      }
    } else {
      res.status(401);
      res.json({ "message": "You don't have permission" });
    }
  })
});

module.exports = router;

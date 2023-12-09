const express = require('express');
const jwt = require("jsonwebtoken");
const router = express.Router();

const verifyToken = require("../utils/jwtUtils")
const Secret_key = process.env.SECRET_KEY
const pool = require('../repositories/postgres');

router.get('/', async (req, res) => {
    try {
        const result = pool.query('SELECT * FROM emoji');
        result
        .then(result => {
            res.status(200);
            res.json(result.rows);
        })
        .catch( err => {
            console.log(err.message)
            res.status(500);
            res.json({ "message": err.message });
        })
    } catch (err) {
        res.status(500);
        res.json({ "message": err.message });
    }
})
router.post('/', verifyToken, async (req, res) => {
    jwt.verify(req.token, Secret_key, (err, authData) => {
        if (err != undefined) {
            console.log(err.message)
            res.status(401);
            res.json({ "message": err.message });
        } else if (authData.userIsDoctor != true) {
            console.log("You don't have permission")
            res.status(401);
            res.json({ "message": "You don't have permission" });
        } else {
            try {
                const {hex, charset} = req.body; 
        
                const result = pool.query('INSERT INTO emoji (HEX, charset) VALUES ($1, $2)', [hex, charset]);
                result
                .then(result => {
                    res.status(200);
                    res.json({"Status": "ok"});
                })
                .catch( err => {
                    console.log(err.message)
                    res.status(500);
                    res.json({ "message": err.message });
                })
            } catch (err) {
                console.log(err.message)
                res.status(500);
                res.json({ "message": err.message });
            }
        }
    })
})
router.get('/:id', async (req, res) => {
    try {
        const result = pool.query('SELECT * FROM emoji WHERE id = $1', [req.params.id]);
        result
        .then(result => {
            res.status(200);
            res.json(result.rows[0]);
        })
        .catch( err => {
            console.log(err.message)
            res.status(500);
            res.json({ "message": err.message });
        })
    } catch (err) {
        console.log(err.message)
        res.status(500);
        res.json({ "message": err.message });
    }
})
router.patch('/:id', verifyToken, async (req, res) => {
    jwt.verify(req.token, Secret_key, (err, authData) => {
        if (err != undefined) {
            console.log(err.message)
            res.status(401);
            res.json({ "message": err.message });
        } else if (authData.userIsDoctor != true) {
            console.log("You don't have permission")
            res.status(401);
            res.json({ "message": "You don't have permission" });
        } else {
            try {
                const updateValues = [];
                for (const key in req.body) {
                    if (req.body.hasOwnProperty(key)) {
                        updateValues.push(`${key} = $${updateValues.length + 1}`);
                    }
                }
                
                const query = `UPDATE emoji SET ${updateValues.join(', ')} WHERE id = $${updateValues.length + 1}`;
                const values = [...Object.values(req.body), req.params.id];
                
                const result = pool.query(query, values);
                result
                .then(result => {
                    res.status(200).json({ "Status": "ok" });
                })
                .catch( err => {
                    console.log(err.message)
                    res.status(500);
                    res.json({ "message": err.message });
                })        
            } catch (err) {
                console.log(err.message)
                res.status(500);
                res.json({ "message": err.message });
            }
        }
    })
})
router.delete('/:id', verifyToken, async (req, res) => {
    jwt.verify(req.token, Secret_key, (err, authData) => {
        if (err != undefined) {
            console.log(err.message)
            res.status(401);
            res.json({ "message": err.message });
        } else if (authData.userIsDoctor != true) {
            console.log("You don't have permission")
            res.status(401);
            res.json({ "message": "You don't have permission" });
        } else {
            try {
                const result = pool.query('DELETE FROM emoji WHERE id = $1', [req.params.id]);
                result
                .then(result => {
                    const {username, password_hash} = req.body;
                    res.status(200);
                    res.json({"Status": "ok"});
                })
                .catch( err => {
                    console.log(err.message)
                    res.status(500);
                    res.json({ "message": err.message });
                })
            } catch (err) {
                console.log(err.message)
                res.status(500);
                res.json({ "message": err.message });
            }
        }
    })
})


module.exports = router;

const express = require('express');
const jwt = require("jsonwebtoken");
const router = express.Router();

const verifyToken = require("../utils/jwtUtils")
const Secret_key = process.env.SECRET_KEY
const pool = require('../repositories/postgres');

router.get('/', verifyToken, async (req, res) => {
    jwt.verify(req.token, Secret_key, (err, authData) => {
        if (err != undefined) {
            res.status(401);
            res.json({ "message": err.message });
        } else if (authData.userIsDoctor != true) {
            console.log("You don't have permission")
            res.status(401);
            res.json({ "message": "You don't have permission" });
        } else {
            try {
                const result = pool.query('SELECT * FROM notes');
                result
                .then(result => {
                    res.status(200);
                    res.json(result.rows);
                })
                .catch( err => {
                    res.status(500);
                    res.json({ "message": err.message });
                })
            } catch (err) {
                res.status(500);
                res.json({ "message": err.message });
            }
        }
    })
})
router.post('/', verifyToken, async (req, res) => {
    jwt.verify(req.token, Secret_key, (err, authData) => {
        if (err != undefined) {
            console.log(err.message)
            res.status(401);
            res.json({ "message": err.message });
        } else {
            try {
                const {name, message} = req.body; 

                const result = pool.query('INSERT INTO notes (name, message, checked) VALUES ($1, $2, false) RETURNING id', [name, message]);
                result
                .then(result => {
                    const noteId = result.rows[0].id;
                    const result2 = pool.query('UPDATE users SET notes_id = $1 WHERE id = $2', [noteId, authData.userId]);
                    result2
                    .then(result2 => {    
                        res.status(200);
                        res.json({"Status": "ok"});
                    })
                    .catch( err => {
                        console.log(err.message)
                        res.status(500);
                        res.json({ "message": err.message });
                    })
                })
                .catch( err => {
                    console.log(err.message)
                    res.status(400);
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
router.get('/:id', verifyToken, async (req, res) => {
    jwt.verify(req.token, Secret_key, (err, authData) => {
        if (err!= undefined) {
            console.log(err.message)
            res.status(401);
            res.json({ "message": err.message });
        } else {    
            try {
                const result = pool.query('SELECT * FROM notes WHERE id=$1', [req.params.id]);
                result
                .then(result => {
                    console.log(result)
                    if (authData.userId == result.rows[0].id_user || authData.userIsDoctor == true) {
                        res.status(200);
                        res.json(result.rows[0]);
                    } else {
                        console.log("You don't have permission")
                        res.status(401);
                        res.json({ "message": "You don't have permission" });
                    }
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
router.patch('/:id', verifyToken, async (req, res) => {
    jwt.verify(req.token, Secret_key, (err, authData) => {
        if (err!= undefined) {
            console.log(err.message)
            res.status(401);
            res.json({ "message": err.message });
        } else {    
            
            try {
                const updateValues = [];
                for (const key in req.body) {
                    if (req.body.hasOwnProperty(key)) {
                        updateValues.push(`${key} = $${updateValues.length + 1}`);
                    }
                }
                const query = `SELECT * FROM users WHERE notes_id=$1`                
                const result = pool.query(query, [req.params.id]);
                result
                .then(result => {
                    if (result.rows[0].id == authData.userId) {
                        const query2 = `UPDATE notes SET ${updateValues.join(', ')} WHERE id = $${updateValues.length + 1} RETURNING *`;
                        const values = [...Object.values(req.body), req.params.id];
                        const result2 = pool.query(query2, values);
                        result2
                        .then(result => {
                            res.status(200);
                            res.json({"Status": "ok"});
                        })
                        .catch( err => {
                            console.log(err.message)
                            res.status(500);
                            res.json({ "message": err.message });
                        })
                    }else {
                        console.log("You don't have permission")
                        res.status(401);
                        res.json({ "message": "You don't have permission" });
                    }
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
        } else {   
            const result = pool.query(`SELECT * FROM users WHERE notes_id=$1`, [req.params.id])                
            result
            .then(result => {
                if (authData.id == result.rows[0].id || authData.userIsDoctor == true) {
                    try {
                        const result2 = pool.query('UPDATE users SET notes_id=null WHERE notes_id=$1', [req.params.id]);
                        result2
                        .then(result => {
                            const result2 = pool.query('DELETE FROM notes WHERE id = $1', [req.params.id]);
                            result2
                            .then(result => {
                                res.status(200);
                                res.json({"Status": "ok"});
                            })
                            .catch( err => {
                                console.log(err.message)
                                res.status(500);
                                res.json({ "message": err.message });
                            })
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
                } else {
                    console.log("You don't have permission")
                    res.status(401);
                    res.json({ "message": "You don't have permission" });
                }
            })

            
        }
    })
})

module.exports = router;

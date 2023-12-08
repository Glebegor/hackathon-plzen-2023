const express = require('express');
const router = express.Router();

const pool = require('../repositories/postgres');
router.get('/', async (req, res) => {
    try {
        // verify
        const result = pool.query('SELECT * FROM emoji');
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
})
router.post('/', async (req, res) => {
    try {
        // verify
        const {hex, charset} = req.body; 
        const result = pool.query('INSERT INTO emoji (HEX, charset) VALUES ($1, $2)', [hex, charset, 5]);
        res.status(200);
        res.json({"Status": "ok"});
    } catch (err) {
        res.status(500);
        res.json({ "message": err.message });
    }
})
router.get('/:id', async (req, res) => {
    try {
        // verify
        const result = pool.query('SELECT * FROM emoji WHERE id = $1', [req.params.id]);
        result
        .then(result => {
            res.status(200);
            res.json(result.rows[0]);
        })
        .catch( err => {
            res.status(500);
            res.json({ "message": err.message });
        })
    } catch (err) {
        res.status(500);
        res.json({ "message": err.message });
    }
})
router.patch('/:id', async (req, res) => {
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
        res.status(200).json({ "Status": "ok" });
        
    } catch (err) {
        res.status(500);
        res.json({ "message": err.message });
    }

})
router.delete('/:id', async (req, res) => {
    try {
        // verify
        const result = pool.query('DELETE FROM emoji WHERE id = $1', [req.params.id]);
        result
        .then(result => {
            const {username, password_hash} = req.body;
            res.status(200);
            res.json({"Status": "OK"});
        })
        .catch( err => {
            res.status(500);
            res.json({ "message": err.message });
        })
    } catch (err) {
        res.status(500);
        res.json({ "message": err.message });
    }
})


module.exports = router;

const express = require('express');
const router = express.Router();

const pool = require('../repositories/postgres');
router.get('/', (req, res) => {
    try {
        // verify
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

})
router.get('/:id', (req, res) => {
    try {
        // verify
        const result = pool.query('SELECT * FROM notes WHERE id = $1', [req.params.id]);
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
router.patch('/:id', (req, res) => {
    try {
        const updateValues = [];
        for (const key in req.body) {
            if (req.body.hasOwnProperty(key)) {
                updateValues.push(`${key} = $${updateValues.length + 1}`);
            }
        }
        
        const query = `UPDATE notes SET ${updateValues.join(', ')} WHERE id = $${updateValues.length + 1}`;
        const values = [...Object.values(req.body), req.params.id];
        
        const result = pool.query(query, values);
        res.status(200).json({ "Status": "OK" });
        
    } catch (err) {
        res.status(500);
        res.json({ "message": err.message });
    }

})
router.delete('/:id', (req, res) => {
    try {
        // verify
        const result = pool.query('DELETE FROM notes WHERE id = $1', [req.params.id]);
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

const express = require('express');
const router = express.Router();

const pool = require('../repositories/postgres');
router.get('/', (req, res) => {
    try {
        // verify
        const result = pool.query('SELECT * FROM users');
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
        const result = pool.query('SELECT * FROM users WHERE id = $1', [req.params.id]);
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
router.patch('/:id', (req, res) => {})
router.delete('/:id', (req, res) => {
    try {
        // verify
        const result = pool.query('DELETE FROM users WHERE id = $1', [req.params.id]);
        result
        .then(result => {
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

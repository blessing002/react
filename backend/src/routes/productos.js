const express = require('express');
const router = express.Router();
const connection = require('../database.js');

router.get('/form/read/productos', (req, res) => {
    connection.query('SELECT precios, marca, cant_gramos FROM productos;', (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });
});

router.get('form/read/productos/f2', (req, res) => {
    this.connect.query('')
})

module.exports = router;
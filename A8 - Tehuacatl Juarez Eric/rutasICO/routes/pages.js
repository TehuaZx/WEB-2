const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/inicio', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

router.get('/lista', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'vista.html'));
});

module.exports = router;
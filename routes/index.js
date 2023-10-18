const express = require('express');
const router = express.Router();
router.use('/api/books', require('./book'));

module.exports = router;


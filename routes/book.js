const express = require('express');
const router = express.Router();
const book_controller = require('../controllers/book_controller');
router.post('/', book_controller.addBook);

module.exports = router;
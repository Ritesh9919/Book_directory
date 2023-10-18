const express = require('express');
const router = express.Router();
const book_controller = require('../controllers/book_controller');
router.post('/', book_controller.addBook);
router.get('/', book_controller.getAllBooks);
router.put('/:id', book_controller.updateBook);

module.exports = router;
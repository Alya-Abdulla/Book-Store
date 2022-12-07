const express = require('express')
const router = express.Router()
const booksController = require('../controllers/books')
// We import our controller functions above

// Require isLoggedIn Middleware.
const isLoggedIn = require("../helper/isLoggedIn");

// We define the routes and controllers
router.get('/books', booksController.getAllBook)

router.get('/books/:_id', booksController.getBook)

router.post('/books', isLoggedIn, booksController.createBook)

router.put('/books/:_id', booksController.updateBook)

router.delete('/books/:_id', booksController.deleteBook)



// We export our routes 
module.exports = router





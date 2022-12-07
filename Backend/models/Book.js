const mongoose = require('mongoose')

const Schema = mongoose.Schema
//Creating our Tweet Schema
const BookModel = new Schema({
    title: {type: String, required: true},
    thumbnail: {type: String, required: true}
}, {
    timestamps: true
})
//Storing our Schema as a model
const Book = mongoose.model('Book', BookModel)
// Exporting our Model 
module.exports = Book;



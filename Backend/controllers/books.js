// We import the Model to communicate with the Database
const Book = require('../models/Book')

async function getAllBook(req,res) {
    const allBooks = await Book.find()
    res.json(allBooks)
}

async function createBook(req,res) {
    console.log('Req Body! ', req.body)
    // Method 3
    // Tweet.create({
    //     name: req.body.name,
    //     content: req.body.content
    // })
    Tweet.create(req.body)
    .then(newBook => res.json(newBook))
    .catch(err => res.json(err))
    
    // Method 2
    // let newTweet = await Tweet.create({
    //     name: req.body.name,
    //     content: req.body.content
    // })
    // Method 1
    // let newTweet = new Tweet(
    //     name: req.body.name
    //     content: req.body.content
    // )
    // await newTweet.save()
}

async function updateBook(req, res) {
    try {
    // await Tweet.findOne({ _id: ... })
    let updatedBook = await Book.findByIdAndUpdate(
        req.params._id,
        req.body //form body
        // {content: req.body.content}
    )
        res.status(200).json({message: 'Bookupdated Successfully!'})
    // res.json(updatedTweet)
    } catch (err) {
        res.json(err)
    }
}


async function deleteBook(req,res) {
    try {
        await Book.findByIdAndDelete(
            req.params._id
        )
        res.json({message: 'Book Deleted Successfully'})
    } catch (err) {
        res.json(err)
    }
}


async function getBook(req,res) {
    try {
        const book = await Tweet.findById(req.params._id)
        res.json(book)
    } catch (err) {
        res.json(err)
    }
}

// Exporting/Sharing our functions
module.exports = {
    getAllBook,
    getBook,
    createBook,
    updateBook,
    deleteBook
}





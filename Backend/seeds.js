
require('dotenv').config()
require('./config/database')
const Book = require('./models/Book')

Book.insertMany([
    {
        title: 'Sample',
        thumbnail: 'Sample'
    }
  ])
.then(() => console.log('Data added successfully!'))
.catch(err => console.log(err))



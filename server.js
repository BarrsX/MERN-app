const express = require('express')
const app = express()
const path = require('path')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({  extended: true}))

mongoose.connect('mongodb+srv://me:books@cluster0.seial.mongodb.net/books?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true }, (error) => {
    console.log(error)
})

mongoose.connection.on('open', () => {
    console.log('Connected to database')
})


app.use(express.static(path.join(__dirname, 'frontend/build')))

const BookSchemea = mongoose.Schema({title: 'string', author: 'string', description: 'string'  })
const Book = mongoose.model('books' , BookSchemea)

app.post('/api', async (req, res) => {
    const body = req.body;
    const book = new Book(body)
    await book.save((error) => {
        if(error) {
            res.status(400)
            res.send('Failed to add book')
        } else {
            res.status(200)
            res.send('Book added')
        }
    })
})

app.get('/*', (req,res) => {
    res.sendFile(path.join(__dirname, 'frontend/build/index.json'))
})

const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log('our app is running on port 8080')
})


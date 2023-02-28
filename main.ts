// import 
import express, { Express, request, response } from "express";
import { Books } from "./data";

// create server 
const server: Express = express()

// create plagens
server.use(express.json())
server.use(express.urlencoded())


const books: Books[] = [
    {
        id: 1,
        name: 'Harry Potter',
        author: "Joan",
        price: 30,
        count: 4
    }
]
// GET
server.get('/book', (request, response) => {
    response
        .status(200)
        .send({
            massage: "all books",
            books
        })
})
// POST
server.post('/book', (request, response) => {
    const book: Books = request.body

    books.push(book)

    response
        .status(200)
        .send('Book saved✅')
})


// DELETE
server.get('/students/:index', (request, response) => {
    const index = +request.params.index

    response
        .status(200)
        .send(books[index])
})

server.delete('/book/:index', (request, response) => { 
    books.splice(+request.params.index, 0)

    response
        .status(200)
        .send({
            massage: 'Book index' + request.params.index + 'deleted'
    })
})

// server setting
server.listen(2345, () => {
    console.log("server working ... (Port : 2345)");

})

const express = require('express')
const nunjucks = require('nunjucks')

const server = express()

const data = require('./data')

server.use(express.static('public'))

server.set('view engine', 'njk')

nunjucks.configure('views', {
    express: server
})

server.get('/', (req, res) => {
    return res.render('main')
})

server.get('/about', (req, res) => {
    return res.render('about')
})

server.get('/content', (req, res) => {
    return res.render('content', { data })
})

server.get("/courses/:id", function(req, res) {
    const id = req.params.id;
  
    return res.send(`O id fornecido na rota é: ${id}`);
  });

server.use(function(req, res) {
    res.status(404).render("not-found")
  })

server.listen(5000, () => {
    console.log('Server is running')
})
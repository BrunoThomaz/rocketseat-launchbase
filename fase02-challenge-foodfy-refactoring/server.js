
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
    return res.render('main', { data })
})

server.get('/about', (req, res) => {
    return res.render('about')
})

server.get('/recipes', (req, res) => {
    return res.render('recipes', { data })
})

server.get('/recipe/recipes', (req, res) => {
    return res.redirect('/recipes')
})

server.get('/recipe/about', (req, res) => {
    return res.redirect('/about')
})

server.get('/recipe/:index', (req, res) => {
    return res.render('recipe', {data, index: req.params.index})
})

server.use(function(req, res) {
    res.status(404).render("not-found")
  })

server.listen(5000, () => {
    console.log('Server is running')
})
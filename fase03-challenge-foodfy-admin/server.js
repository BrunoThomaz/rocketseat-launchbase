
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

server.get("/admin/recipes", recipes.index); // Mostrar a lista de receitas
server.get("/admin/recipes/create", recipes.create); // Mostrar formulário de nova receita
server.get("/admin/recipes/:id", recipes.show); // Exibir detalhes de uma receita
server.get("/admin/recipes/:id/edit", recipes.edit); // Mostrar formulário de edição de receita

server.post("/admin/recipes", recipes.post); // Cadastrar nova receita
server.put("/admin/recipes", recipes.put); // Editar uma receita
server.delete("/admin/recipes", recipes.delete); // Deletar uma receita



server.use(function(req, res) {
    res.status(404).render("not-found")
  })

server.listen(5000, () => {
    console.log('Server is running')
})
const express = require('express')
const nunjucks = require('nunjucks')
const routes = require("./routes")
const methodOverride = require('method-override')

const server = express()

//post requests
server.use(express.urlencoded({ extended: true }))

//server public folder
server.use(express.static('public'))
server.use(methodOverride('_method'))

//user routes.js to serve dynamic content
server.use(routes)

//nunjucks template
server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
})


//starts server on port 5000
server.listen(5000, function () {
    console.log("server is running")
})
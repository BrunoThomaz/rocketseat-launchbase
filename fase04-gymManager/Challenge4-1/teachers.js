const fs = require('fs')
const data = require('./data.json')
const { send } = require('process')
const { age, dateBirth } = require('./utils')



//function update
exports.update = function (req, res) {
    const {id} = req.params

    const result = data.teachers.find(function (result) {
       return result.id == id
    })
    if(!result) return res.send('Professor não encontrado!')
    
    const teacher = {
        ...result,
        nascimento: dateBirth(result.nascimento),
        atuacao: result.atuacao.split(','),
        createdAt: new Intl.DateTimeFormat("pt-BR").format(result.createdAt)

    }
    return res.render('teachers/edit', {teacher})
    // return res.send(teacher)
}

//function get
exports.show = function (req, res) {
    const {id} = req.params

    const result = data.teachers.find(function (result) {
       return result.id == id
    })
    if(!result) return res.send('Professor não encontrado!')
    
    const teacher = {
        ...result,
        idade: age(result.nascimento),
        atuacao: result.atuacao.split(','),
        createdAt: new Intl.DateTimeFormat("pt-BR").format(result.createdAt)

    }
    return res.render('teachers/teacher', {teacher})
}

//function create
exports.post = function(req, res) {
    const keys = Object.keys(req.body)

    for(key of keys) {
        if (req.body[key] == ""){
            return res.send("Por favor, preencha todos os campos")
        }
    }

    let {avatar_url, name, nascimento, escolaridade, aula, atuacao} = req.body

    const createdAt = Date.now()

    const id = Number(data.teachers.length+1)


    nascimento = Date.parse(nascimento)


    data.teachers.push({
        avatar_url, 
        name, 
        nascimento, 
        escolaridade, 
        aula, 
        atuacao, 
        createdAt,
        id
    })

    fs.writeFile('./data.json', JSON.stringify(data, null, 2), function (err) {
        if(err) return res.send("Falha em salvar o arquivo.")

        return res.redirect('/teachers')
    })

}

//function put 
exports.put = function (req, res) {
    const {id} = req.body
    let index = -1

    const result = data.teachers.find(function (result, position) {
        if(id == result.id){
            index = position
            return true 
        }
    })
     if(!result) return res.send('Professor não encontrado!')


    let {avatar_url, name, nascimento, escolaridade, aula, atuacao} = req.body

    data.teachers[index] = {
        ...result,
        ...req.body,
        nascimento: Date.parse(nascimento)

    }


    fs.writeFile('./data.json', JSON.stringify(data, null, 2), function (err) {
        if(err) return res.send("Falha em salvar o arquivo.")

        return res.redirect('/teachers/{{id}}')
    })
}       

exports.delete = function (req, res) {
    let {id} = req.body
    let deletedTeachers = data.teachers.filter(function (teacher) {
        return teacher.id!=id
    })

    data.teachers=deletedTeachers

    fs.writeFile('./data.json', JSON.stringify(data, null, 2), function (err) {
        if(err) return res.send("Falha em salvar o arquivo.")

        return res.redirect('/teachers')
    })
}
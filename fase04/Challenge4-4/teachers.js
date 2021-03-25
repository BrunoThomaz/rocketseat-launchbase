const fs = require('fs')
const data = require('./data.json')
const { send } = require('process')
const { age } = require('./utils')



//function update
exports.update = function (req, res) {
    const {id} = req.params

    const result = data.teachers.find(function (result) {
       return result.id == id
    })
    if(!result) return res.send('Professor não encontrado!')
    
   let dateBirth = (timestamp)=>{
       let date = new Date(timestamp)
        let year = date.getUTCFullYear()
        let month = ("0" + (date.getUTCMonth() + 1)).slice(-2)
        let day = ("0" + date.getUTCDate()).slice(-2)
        return `${year}-${month}-${day}`
    }

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
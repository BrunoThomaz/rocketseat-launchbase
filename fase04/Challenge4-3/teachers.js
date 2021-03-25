const fs = require('fs')
const data = require('./data.json')

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
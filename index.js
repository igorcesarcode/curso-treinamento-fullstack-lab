const express = require ('express')
const app = express()

//Pegando a porta do ambinte caso não consiga ela inicia na porta 3000
const port = process.env.PORT  || 3000

app.get('/', (request, response) => {
    response.send ('<h1>Olá Fullstack Lab<h1>')
})

app.listen(port, (err) => {
    if (err){
        console.log('erro')
    }else {
        console.log ('Servidor Iniciado na porta:',port)
    }
}) 
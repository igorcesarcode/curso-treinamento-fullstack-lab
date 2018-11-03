const express = require ('express')
const app = express()

app.set('view engine', 'ejs')

//Pegando a porta do ambinte caso não consiga ela inicia na porta 3000
const port = process.env.PORT  || 3000

let i = 10

app.get('/', (request, response) => {
    i++
    response.render('index',{ i:i })
})

app.listen(port, (err) => {
    if (err){
        console.log('erro')
    }else {
        console.log ('Servidor Iniciado na porta:',port)
    }
}) 
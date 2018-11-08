const express = require ('express')
const app = express()
const BodyParser = require('body-parser')

const categorias = require('./routes/categorias.js')
const publicacoes = require('./routes/publicacoes')


app.set('view engine', 'ejs')
app.use(BodyParser.urlencoded())

//Pegando a porta do ambinte caso não consiga ela inicia na porta 3000
const port = process.env.PORT  || 3000

app.get('/', async(request, response) => {
    response.render('index')
})


app.listen(port, (err) => {
    if (err){
        console.log('erro')
    }else {
        console.log ('Servidor Iniciado na porta:',port)
    }
}) 
app.use('/categorias', categorias)
app.use('/publicacoes', publicacoes)
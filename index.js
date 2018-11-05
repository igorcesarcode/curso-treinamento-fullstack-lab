const express = require ('express')
const app = express()
const BodyParser = require('body-parser')

const categorias = require('./routes/categorias.js')


app.set('view engine', 'ejs')
app.use(BodyParser.urlencoded())

//Pegando a porta do ambinte caso não consiga ela inicia na porta 3000
const port = process.env.PORT  || 3000

app.get('/', async(request, response) => {
    const content = await axios.get('https://como-fazer-igorcesarcode.firebaseio.com/teste.json')
 
    response.render('index',{ i:content.data })
})


app.listen(port, (err) => {
    if (err){
        console.log('erro')
    }else {
        console.log ('Servidor Iniciado na porta:',port)
    }
}) 
app.use('/categorias', categorias)

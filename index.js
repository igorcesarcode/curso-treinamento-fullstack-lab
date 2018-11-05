const express = require ('express')
const app = express()
const axios = require('axios')
const BodyParser = require('body-parser')

app.set('view engine', 'ejs')
app.use(BodyParser.urlencoded())

//Pegando a porta do ambinte caso não consiga ela inicia na porta 3000
const port = process.env.PORT  || 3000


app.get('/', async(request, response) => {
    const content = await axios.get('https://como-fazer-igorcesarcode.firebaseio.com/teste.json')
 
    response.render('index',{ i:content.data })
})


app.get('/categorias/nova', (req, res) => {
    res.render ('categorias/nova')
})

app.post('/categorias/nova', async(req, res) => {
    await axios.post('https://como-fazer-igorcesarcode.firebaseio.com/categorias.json', {
        categoria: req.body.categoria
    })
    res.send(req.body)
    
})

app.get('/categorias', async (req,res) => {
    const content = await axios.get('https://como-fazer-igorcesarcode.firebaseio.com/categorias.json')
    res.render('categorias/index', {categorias : content.data} )

})



app.listen(port, (err) => {
    if (err){
        console.log('erro')
    }else {
        console.log ('Servidor Iniciado na porta:',port)
    }
}) 
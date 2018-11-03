const express = require ('express')
const app = express()

const resolver = (request, response) => {
    response.send ('<h1>Olá Fullstack Lab<h1>')
}

app.get('/', resolver)

app.listen(3000, (err) => {
    if (err){
        console.log('erro')
    }else {
        console.log ('Como fazer server is running...')
    }
}) 
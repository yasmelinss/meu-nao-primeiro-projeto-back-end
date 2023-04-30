const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

function mostraMulher(request, response){
    response.json({
        nome: 'Yasmin Messias lins',
        imagem: 'https://media.licdn.com/dms/image/D4D03AQH-27C8-onFHw/profile-displayphoto-shrink_800_800/0/1679007299170?e=1688601600&v=beta&t=M-X5wKEy8rieh39WgJUITQsvXjhTM59Q8uMdhb4CUos',
        minibio: 'Eu sou estudante de MKT na USP e sou muito legal'
    })
}

function mostraPorta (){
    console.log ('Servidor criado e rodando na porta ', porta)
}

app.use(router.get('/mulher', mostraMulher))
app.listen(porta, mostraPorta)
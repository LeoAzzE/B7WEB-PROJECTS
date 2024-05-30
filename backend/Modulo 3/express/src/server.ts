import express from 'express'
import helmet from 'helmet'
import path from 'path'

const server = express()

server.use(helmet())
server.use(express.json())
server.use(express.urlencoded({extended: true}))
server.use(express.static(path.join(__dirname, '../public')))

server.get('/ping', (req, res) => {
    res.json( {pong: true} )
})

server.get('/produtos', (req, res) => {
    res.json( {produtos: []} )
})

server.get('/produtos/:id', (req, res) => {
    const { id } = req.params;
    res.json( {id, name: 'teclado QWER', price: 90} )
})


server.get('/', (req,resp) => {
    let name = "Leo"
    let age = 25

    resp.json({name, age})
})

server.listen(3000, () => {
    console.log('Servidor rodando na porta http://localhost:3000/')
})
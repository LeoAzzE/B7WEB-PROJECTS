import { Router } from 'express';
import { createUser, createUsers, deleteUser, getAllUsers, getUserByEmail, updateUser } from '../services/user';

export const mainRouter = Router();

mainRouter.get('/ping', (req, res) => {
    res.json({ pong: true });
});

mainRouter.post('/user', async (req,res) => {
    //validar os dados
    const user = await createUser(
        {name: 'testador 3',email: 'teste3@hotmail.com',
        posts: {
            create: {
                title: 'Titulo de teste 2 ',
                body: 'Corpo de teste'
            }
        }
        })
    if (user) {
        res.status(201).json({ user })
    } else {
        res.status(500).json({error: 'E-mail ja cadastrado'})
    }
})

mainRouter.post('/users', async (req,res) => {
    const result = await createUsers([
        {name: 'João', email: 'joao@hotmail.com'},
        {name: 'João 2', email: 'joao@hotmail.com'},
        {name: 'Fulano', email: 'fulano@hotmail.com'},
        {name: 'Ciclano', email: 'ciclano@hotmail.com'}
    ])
    res.json({result})
})

mainRouter.get('/users', async (req, res) => {
    const result = await getAllUsers()
    res.json({result})
})

mainRouter.get('/user', async (req,res) => {
    const result = await getUserByEmail('joao@hotmail.com')
        res.json({result})
})

mainRouter.put('/user', async (req, res) => {
    const result = await updateUser()
    res.json({result})
})

mainRouter.delete('/user', async (req, res) => {
    const result = await deleteUser()
    return res.status(204).json({result})
})
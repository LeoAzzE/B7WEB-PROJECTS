import express, { RequestHandler } from 'express';
import { interferir } from '../middlewares/intervir';

const router = express.Router()

router.use(interferir)

router.get('/ping', (req, res) => {
    console.log('executou o ping')
    res.json( {pong: true} )
})


router.get('/', (req,resp) => {
    let name = "Leo"
    let age = 25

    resp.json({name, age})
})

export default router;
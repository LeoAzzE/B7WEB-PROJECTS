import express from 'express';

const router = express.Router()

router.get('/ping', (req, res) => {
    res.json( {pong: true} )
})


router.get('/', (req,resp) => {
    let name = "Leo"
    let age = 25

    resp.json({name, age})
})

export default router;
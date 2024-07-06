import { RequestHandler } from "express"

export const interferir: RequestHandler = (req, res, next) => {
    let logged = true
    if (logged) {
        next()  // next() prossegue a req
    } else {
    res.status(403).json({error: "middleware nao permitiu"}) // nao prossegue a req e retorna error
        
    }
}
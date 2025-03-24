import jwt from 'jsonwebtoken'
import { Response, Request } from 'express'


/*
    • Generate a JWT token
*/

export const generateToken = (_: Request, res: Response) => {
    const tokenKey = process.env.TOKEN_SECRET_KEY || "SecretKEYFlaskJumpRaceGolangRust"
    const token = jwt.sign({"user":"Admin"}, tokenKey,{expiresIn:24*60*60});
    res.status(200).json(token)
}
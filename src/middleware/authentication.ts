
import jwt from "jsonwebtoken"
import { Request,Response,NextFunction } from "express"

/*
    • Authentication VAlidator
    • Taken the token from Bearer
    • If not found do return and do not let the user access the route, do the same when token is not verified
    • If everythins is ok then do call the next function 
*/

const middlewareAuth = async(req:Request,res:Response,next:NextFunction):Promise<void> =>{
    const token = req.header("Authorization")?.replace("Bearer ","")
    if(!token){
        res.status(401).json("User not Authenticated")
        return
    }
    const tokenSecret = process.env.TOKEN_SECRET_KEY||"SecretKEYFlaskJumpRaceGolangRust"
    if(token){
        const verifyToken  = jwt.verify(token,tokenSecret)
        if(!verifyToken){
            res.status(401).json("Token is either incorrect or expired")
            return
        }
        return next()
    }

}

export default middlewareAuth
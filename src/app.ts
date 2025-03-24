/*
    • Entry Point for the application

    • Configure the express with initilisation and setup middleware that is on line number 18, responsible for parsing the JSON 
    
    • Dotenv is configured to secure the ENV vairiables
    
    • Route starting with /gadgets is inilised and the route handle for this is mention in the dedicated route file

    • Just listening the application on PORT number which is mention in the env file
*/


import express from 'express'
import dotenv from 'dotenv'
import gadgetRouteHandler from './routes/gadgetRoute.routes'
import tokenGeneratorRouteHandler from "./routes/tokenGenerationRoute.routes"

const app = express()
app.use(express.json())
dotenv.config()

app.use("/gadgets",gadgetRouteHandler)
app.use("/create-token",tokenGeneratorRouteHandler)

app.listen(process.env.PORT,()=>{console.log(`App is running on PORT ${process.env.PORT}`)})

export {app}
const express = require("express")
const routes = express.Router()

routes.get("/user",(request,response) => response.json({message:"primeira rota o filho de Deus"}) )

module.exports = routes

const express = require("express")
const user = require("./routes/user")
const app = express()

app.use(user)
app.listen(3333,() => console.log("O server está funcionando"))


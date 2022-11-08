const express = require('express')
const app = express()
const env = require("dotenv")
env.config({path:"./config/.env"})
const cors =require("cors")
const db = require("./config/db")
const todo = require("./routes/todo_routes")
db()
app.use(express.json())
app.use(express.static('public'));
app.use(cors())
app.use('/api/v1',todo)


app.listen(process.env.PORT, () => console.log(`http://localhost:${process.env.PORT || 4000}`))


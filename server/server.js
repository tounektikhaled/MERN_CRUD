//importion de modules
require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors =require('cors')

const DB = process.env.DB
const PORT = process.env.PORT || 3500;

const app = express()



app.use(express())
app.use (express.json())
app.use(cors())
app.use('/user',require('./routes/userRoutes'))
//connection db
mongoose
    .connect(DB)
    .then(() => {
        console.log('db connected')
//lancer server
        app.listen(PORT, () => {
            console.log(`your server is  running on port : ${PORT}`);
        })
    })
    .catch(() => {
        console.log('error')
    })





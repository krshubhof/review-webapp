const router = require('./route.js')

const bodyParser = require('body-parser')
const express = require('express')
const mongoose = require('mongoose')

const app = express()

app.use(bodyParser.json())

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/test')

app.use('/api', router)
app.listen(3000, ()=>{
    console.log("Server Running")
})
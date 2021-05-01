const { json } = require('express')
const express = require('express')
const mongoose = require('mongoose')

const url = 'mongodb://localhost/programmerDB'
const app = express()

mongoose.connect(url,{useNewUrlParser:true})

const con = mongoose.connection

con.on('open',()=>{
    console.log('Connected....');
})

app.use(json())

const programmerRouter = require('./routers/programmers')
app.use('/programmers',programmerRouter)


app.listen(9000,()=>{
    console.log('Server Started!');
})
const express = require('express')
const mongoose = require ('mongoose')
require ('dotenv').config();

// CONEXION A LA BD
const uri= `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster9.muninbp.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;
mongoose.connect(uri)
.then(()=>console.log('Database connected'))
.catch ((err)=> console.log(err));

const app= express();
const port= process.env.PORT ||5000;

app.listen(port, ()=>{

    console.log('connect whith the port ', port)
});

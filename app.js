const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors')
require('dotenv/config')

//middlewares
app.use(cors())
app.use(bodyParser.json())

//import routes
const indexroutes = require('./routes/index');
app.use('/person',indexroutes);

//database info
mongoose.connect(process.env.DBCONNECTION,{ useUnifiedTopology: true ,useCreateIndex: true,
    useNewUrlParser: true} ,()=>{
    console.log("conectado a mongodb")
})

app.listen(3000);
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors')
require('dotenv/config')

const username = process.env.MONGODB_USERNAME;
const password = process.env.MONGODB_PASSWORD;
const dbHost = process.env.MONGODB_HOSTNAME;
const port = process.env.MONGODB_PORT;
const database = process.env.MONGODB_DATABASE;

const connectionString = `mongodb://${username}:${password}@${dbHost}:${port}/${database}?authSource=${database}`;

//middlewares
app.use(cors())
app.use(bodyParser.json())

//import routes
const indexroutes = require('./routes/index');
app.use('/person',indexroutes);

//database info
mongoose.connect(connectionString,{ useUnifiedTopology: true ,useCreateIndex: true,
    useNewUrlParser: true} ,()=>{
    console.log("conectado a mongodb")
})

app.listen(8000);
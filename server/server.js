const express = require ('express');
const bodyParser = require ('body-parser');
const cors= require('cors');
const mongoose= require('mongoose');
const Schema=mongoose.Schema;
const loginRouter=require('./routes/loginRouter')



const app = express();


app.use(cors());
app.use(bodyParser.json())
app.use('/login',loginRouter)



console.log("Server is runnig...");

app.listen(8080);
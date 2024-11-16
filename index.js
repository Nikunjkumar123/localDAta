const express = require('express')
require('dotenv').config();
const cors = require('cors');
const app = express();
const connectDB = require('./src/db/connectDB.js')
const addlocationRouter  = require('./src/router/addlocationRouter.js')

app.use(cors());
app.use(express.json());
app.use('/api/v1',addlocationRouter)


connectDB(process.env.URL);
app.listen(process.env.PORt,()=>{
    console.log("connected to PORT");
})
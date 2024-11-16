const express = require('express')
require('dotenv').config();
const cors = require('cors');
const app = express();
const connectDB = require('./src/db/connectDB.js')
const addlocationRouter  = require('./src/router/addlocationRouter.js')

app.use(cors());
app.use(express.json());
app.use('/api/v1',addlocationRouter)

app.get('/', (req, res) => {
    res.send('<a href="/api/v1/gloc">Go to location API</a>');
});
connectDB(process.env.URL);
app.listen(process.env.PORt,()=>{
    console.log("connected to PORT",process.env.PORt);
})

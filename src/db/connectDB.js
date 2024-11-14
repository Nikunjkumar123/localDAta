const mongoose = require('mongoose')

const connectDB =  (URL)=>{
    mongoose.connect(URL).then(()=>console.log("connnected to mongodb")).catch(()=>console.log("mongoDB failed"));
}

module.exports = connectDB;
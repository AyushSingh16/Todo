const mongoose = require('mongoose');
require("dotenv").config();
const dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true,             //returns promise
    })
    .then(()=>{
        console.log("DB connection has been established.")
    })
    .catch((error) =>{
        console.log("Errors are there!")
        console.error(error.message);
        process.exit(1);        // find the meaning of this
    });
}

module.exports = dbConnect;
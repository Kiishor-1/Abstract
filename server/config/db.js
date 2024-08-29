const mongoose = require('mongoose');

exports.dbConnect =async ()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Database connected");
    }catch(err){
        console.log(err)
        console.log('error in connecting database');
    }
}


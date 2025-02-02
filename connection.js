const mongoose = require('mongoose')

// async function connectToMongoDb(url){
//     return mongoose.connect(url)
//     .then(()=> console.log("MongoDb Connected"))
//     .catch((err)=> console.log("Mongo connection error",err))
// }

async function connectToMongoDb(url) {
    const MONGO_URI = url; // Load from .env
    if (!MONGO_URI) {
        console.log("MongoDB URI is missing!");
        return;
    }

    try {
        await mongoose.connect(MONGO_URI);
        console.log("MongoDB Connected");
    } catch (error) {
        console.error("MongoDB Connection Error:", error);
    }
}


module.exports = {
    connectToMongoDb
}
const mongoose = require('mongoose');

const mongoURI = "mongodb://localhost:27017/cloudnote"

// const connectToMongo = ()=>{
//     mongoose.connect(mongoURI, ()=>{
//         console.log("Connected to Mongo Successfully");
//     })
// }
const connectToMongo=()=>{
    mongoose.connect(mongoURI);
    console.log("connected to mongo");
}

module.exports = connectToMongo;
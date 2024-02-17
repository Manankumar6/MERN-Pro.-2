const mongoose = require('mongoose');

const URI = process.env.MONGODB_URI
const connectDb = async()=>{
    try {
        await mongoose.connect(URI)
        console.log("Connection successfully")
        
    } catch (error) {
        console.error("Connection failed" + error)

    }
}
module.exports = connectDb
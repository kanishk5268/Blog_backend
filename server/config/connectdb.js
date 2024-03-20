const mongoose = require('mongoose');

const connectDB = async()=>{

    try {
        mongoose.set('strictQuery',false);
        const connectString = await mongoose.connect(process.env.MONGO_URL);
        console.log(`Database connected: ${connectString.connection.host}`);
    } catch (error) {
        console.log(error);
    }
}


module.exports = connectDB;
const mongoose = require('mongoose');

/**
 * Connects to MongoDB using the MONGO_URI environment variable.
 * @throws {Error} If connection fails
 */

const connectDB = async () => { 
    await mongoose.connect(process.env.MONGO_URI, { 
        useNewUrlParser: true,
        useUnifiedTopology: true,
        serverSelectionTimeoutMS: 5000, // Timeout after 5s if server not found
        socketTimeoutMS: 45000, // Close sockets after 45s of inactivity
        maxPoolSize: 10, // Max 10 simultaneous connections (adjust based on load)
    });     

    console.log("MongoDB connected successfully");
}

 module.exports = { connectDB };

const mongoose = require('mongoose');

const connectDB = (URL) => {
    mongoose.connect(URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        connectTimeoutMS: 30000, // Set to a higher value (e.g., 30 seconds)
        socketTimeoutMS: 30000,
    })
    .then(() => console.log("Connected to MongoDB"))
    .catch((error) => console.log("MongoDB connection failed:", error));
};

module.exports = connectDB;

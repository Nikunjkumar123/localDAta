const mongoose = require('mongoose');

const connectDB = (URL) => {
    mongoose.connect(URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        connectTimeoutMS: 30000,
        socketTimeoutMS: 30000,
    })
    .then(() => console.log("Connected to MongoDB"))
    .catch((error) => console.log("MongoDB connection failed:", error));
};

mongoose.connection.on('error', err => {
    console.error('MongoDB connection error:', err);
});

mongoose.connection.once('open', () => {
    console.log("MongoDB connection is open and ready");
});

module.exports = connectDB;

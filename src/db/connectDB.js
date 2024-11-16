<<<<<<< HEAD

const mongoose = require('mongoose');

const connectDB = async (URL) => {
    try {
        await mongoose.connect(URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            connectTimeoutMS: 30000,
            socketTimeoutMS: 30000,
            ssl: true, // Use SSL if your MongoDB server requires it
        });
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("MongoDB connection error:", error);
    }
};

=======
const mongoose = require('mongoose');

const connectDB = async (URL) => {
    try {
        await mongoose.connect(URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            connectTimeoutMS: 30000,
            socketTimeoutMS: 30000,
            ssl: true, // Use SSL if your MongoDB server requires it
        });
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("MongoDB connection error:", error);
    }
};

>>>>>>> d5c24e394e533aca286ee447d9314eb7d934045d
module.exports = connectDB;

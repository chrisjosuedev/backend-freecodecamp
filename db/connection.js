const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Database connected!");
    } catch (error) {
        throw new Error(`Connection failed -> ${error}`);
    }
};

connectDB();
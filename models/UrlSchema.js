const mongoose = require("mongoose");

const UrlSchema = new mongoose.Schema({
    originalUrl: {
        type: String,
        require: true,
        unique: true,
    },
    shortUrl: {
        type: Number,
    },
});

module.exports = mongoose.model("Url", UrlSchema);

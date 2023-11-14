const mongoose = require("mongoose");

const UrlSchema = mongoose.Schema({
    url: {
        type: String,
        require: true,
        unique: true,
    },
    shortUrl: {
        type: Number,
    },
});

module.exports = mongoose.model("Url", UrlSchema);

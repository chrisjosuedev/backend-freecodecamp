const { Schema, model } = require("mongoose");

const UrlSchema = new Schema({
    original_url: {
        type: String,
        require: true,
        unique: true
    },
    short_url: {
        type: Number,
        unique: true
    },
});

module.exports = model("Url", UrlSchema);

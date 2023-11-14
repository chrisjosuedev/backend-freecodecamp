require("dotenv").config();
require("./db/connection");

const express = require("express");
const cors = require("cors");
const app = express();

const {
    shortUrl,
    getOriginalUrl,
} = require("./controllers/urlController.controller");

const { verifyShortId, verifyUrl } = require("./middlewares")

// Basic Configuration
const port = process.env.PORT || 3000;

app.use(cors());

app.use(express.urlencoded({ extended: false }));
app.use("/public", express.static(`${process.cwd()}/public`));

app.get("/", (req, res) => {
    res.sendFile(process.cwd() + "/views/index.html");
});

// URL Shortener Endpoint

// Access to Short URL
app.get("/api/shorturl/:short_url", verifyShortId, getOriginalUrl);

// Get a new URL
app.post("/api/shorturl", verifyUrl, shortUrl);


// Run Server
app.listen(port, () => console.log(`Listening on port ${port}`));

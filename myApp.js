require("dotenv").config();

const express = require("express");
const app = express();

const { getRequestTimestamp } = require("./middlewares/getRequestTimestamp");

/** ---------- Middlewares ---------------- */
app.use("/public", express.static(__dirname + "/public"));

/** Middleware executes in all routes: method, path and ip request */
app.use((req, res, next) => {
    console.log(`${req.method} ${req.path} - ${req.ip}`);
    next();
});

app.get("/", (req, res) => {
    res.sendFile(`${__dirname}/views/index.html`);
});

/** ------------- Routes ---------------- */
app.get("/json", (req, res) => {
    const isUppercase = process.env.MESSAGE_STYLE === "uppercase";
    const resMessage = "Hello json";
    res.json({
        message: isUppercase ? resMessage.toUpperCase() : resMessage,
    });
});

/** Route with a Chained Middleware */
app.get("/now", getRequestTimestamp, (req, res) => {
    res.json({
        time: req.time,
    });
});

/** Echo Server */
app.get("/:word/echo", (req, res) => {
    const { word } = req.params;

    res.json({
        echo: word,
    });
});

module.exports = app;

require("dotenv").config();

const express = require("express");
const app = express();

const bodyParser = require("body-parser");

const { getRequestTimestamp } = require("./middlewares/getRequestTimestamp");

/** ---------- Middlewares ---------------- */
app.use("/public", express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: false }));

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

/** Echo Server - Params */
app.get("/:word/echo", (req, res) => {
    const { word } = req.params;

    res.json({
        echo: word,
    });
});

/** Query Params - API */

app.route("/name")
    .get((req, res) => {
        const { first, last } = req.query;
        res.json({
            name: first + " " + last,
        });
    })
    .post((req, res) => {
        const { first, last } = req.body;
        res.json({
            name: first + " " + last,
        });
    });

module.exports = app;

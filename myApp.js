require("dotenv").config();

const express = require("express");
const app = express();

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

app.get(
    "/now",
    (req, res, next) => {
        req.time = new Date().toString();
        next();
    },
    (req, res) => {
        res.json({
            time: req.time,
        });
    }
);

module.exports = app;

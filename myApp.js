require("dotenv").config();

const { Router } = require("express");
const router = Router();

const { currentTimeRequest } = require("./middlewares/currentTimeRequest");

router.get("/", (req, res) => {
    res.sendFile(`${__dirname}/views/index.html`);
});

router.get("/json", (req, res) => {
    const isUppercase = process.env.MESSAGE_STYLE === "uppercase";
    const resMessage = "Hello json";
    res.json({
        message: isUppercase ? resMessage.toUpperCase() : resMessage,
    });
});

router.get("/now", currentTimeRequest, (req, res) => {
    res.json({
        time: req.time,
    });
});

module.exports = router;

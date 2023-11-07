require("dotenv").config();

const { Router } = require("express");
const router = Router();

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

router.get(
    "/now",
    function (req, res, next) {
        req.time = new Date().toString();
        next();
    },
    (req, res) => {
        res.json({
            time: req.time,
        });
    }
);

module.exports = router;

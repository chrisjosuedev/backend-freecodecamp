const { Router } = require("express");
const router = Router();

router.get("/", (req, res) => {
    res.sendFile(`${__dirname}/views/index.html`);
});

router.get("/json", (req, res) => {
    res.json({
        message: "Hello json",
    });
});

module.exports = router;

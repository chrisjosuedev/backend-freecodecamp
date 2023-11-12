// index.js
// where your node app starts

// init project
require("dotenv").config();
const express = require("express");
const app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
const cors = require("cors");
const { validateDate } = require("./middlewares/validateDate");
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
});

// your first API endpoint...
app.get("/api/:date?", validateDate, (req, res) => {
    const { date } = req.params;

    // if date undefined, send current date
    if (!date) {
        return res.json({
            unix: new Date().getTime(),
            utc: new Date().toUTCString(),
        });
    }

    res.json({
        unix: new Date(date).getTime(),
        utc: new Date(date).toUTCString(),
    });
});

// listen for requests :)
app.listen(process.env.PORT, () => {
    console.log("Your app is listening on port " + process.env.PORT);
});

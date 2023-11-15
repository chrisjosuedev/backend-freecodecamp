require("dotenv").config();

const express = require("express");
const cors = require("cors");

const multer = require("multer");
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use("/public", express.static(process.cwd() + "/public"));
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
    res.sendFile(process.cwd() + "/views/index.html");
});

app.post("/api/fileanalyse", upload.single("upfile"), (req, res) => {
    if (req.file) {
        const { originalname, mimetype, size } = req.file;
        return res.status(200).json({
            name: originalname,
            type: mimetype,
            size,
        });
    }
    res.status(400).json({
        msg: "No file received.",
    });
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

import "dotenv/config";
import "./db/connection.js";

import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

// Importing Routes
import userRoutes from "./routes/users.routes.js";

const app = express();
const PORT = process.env.PORT || 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));

// Routes
app.use("/api/users", userRoutes);
app.get("/", (req, res) => res.sendFile(__dirname + "/views/index.html"));

app.listen(PORT, () => {
    console.log(`Your app is listening on port ${PORT}`);
});

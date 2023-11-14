import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
    res.json({greetings: "Hello, world!"});
})

export default router;
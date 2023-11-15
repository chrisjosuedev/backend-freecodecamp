import { Router } from "express";
import { check } from "express-validator";

import { fieldValidator } from "../middlewares/validateFields.js";
import { userExists, validateDate } from "../helpers/customValidators.js";

import { findAllUsers, saveUser } from "../controllers/users.controller.js";
import { findAllUserLogs } from "../controllers/logs.controller.js";
import { saveExercise } from "../controllers/exercise.controller.js";

const router = Router();

router.get("/", findAllUsers);
router.get(
    "/:_id/logs",
    [
        check("_id", "Invalid User Id Format").isMongoId(),
        check("_id").custom(userExists),
        fieldValidator,
    ],
    findAllUserLogs
);

router.post("/", saveUser);
router.post(
    "/:_id/exercises",
    [
        check("_id", "Invalid User Id Format").isMongoId(),
        check("_id").custom(userExists),
        check("description", "Description is required").not().isEmpty(),
        check("duration", "Duration is required").not().isEmpty(),
        check("duration", "Duration must be a number").isNumeric(),
        check("date").custom(validateDate).optional(),
        fieldValidator,
    ],
    saveExercise
);

export default router;

import Exercise from "../models/exercise.js"

export const saveExercise = async (req, res) => {
    const { description, duration, date } = req.body;
    const { _id } = req.params;
    try {
        const newExercise = {
            description,
            duration,
            date: !date ? new Date().getTime() : date,
            username: _id,
        };
        const exerciseSaved = await Exercise.create(newExercise);
        res.status(201).json(exerciseSaved);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: `Something failed -> ${error}`,
        });
    }
};

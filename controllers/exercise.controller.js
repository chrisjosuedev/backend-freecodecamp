import Exercise from "../models/exercise.js";

export const saveExercise = async (req, res) => {
    const { description, duration, date } = req.body;
    const { _id } = req.params;
    try {
        const newExercise = {
            description,
            duration,
            date: !date ? new Date().getTime() : date,
            user: _id,
        };
        const exerciseSaved = await Exercise.create(newExercise);
        const populated = await Exercise.findById(exerciseSaved._id).populate("user");
        
        res.status(201).json({
            username: populated.user.username,
            description: populated.description,
            duration: populated.duration,
            date: new Date(populated.date).toDateString(),
            _id
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: `Something failed -> ${error}`,
        });
    }
};

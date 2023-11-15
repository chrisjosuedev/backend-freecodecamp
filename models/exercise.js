import { Schema, model } from "mongoose";

const ExerciseSchema = new Schema({
    description: {
        type: String,
        require: true,
    },
    duration: {
        type: Number,
        require: true,
    },
    date: {
        type: Date,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
});

ExerciseSchema.methods.toJSON = function () {
    const { __v, ...exercise } = this.toObject();
    exercise.date = new Date(exercise.date).toDateString()
    return exercise;
};

export default model("Exercise", ExerciseSchema);

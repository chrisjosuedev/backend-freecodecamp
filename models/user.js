import { Schema, model } from "mongoose";

const UserSchema = new Schema({
    username: {
        type: String,
        require: true
    }
});

UserSchema.methods.toJSON = function () {
    const { __v, ...user } = this.toObject();
    return user;
}

export default model("User", UserSchema);
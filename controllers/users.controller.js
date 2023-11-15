import User from "../models/user.js";

export const saveUser = async (req, res) => {
    const { username } = req.body;
    try {
        const newUser = await User.create({ username });
        res.status(201).json(newUser);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: `Something failed -> ${error}`,
        });
    }
};

export const findAllUsers = async (req, res) => {
    try {
        const allUsers = await User.find();
        res.status(200).json(allUsers);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: `Something failed -> ${error}`,
        });
    }
};

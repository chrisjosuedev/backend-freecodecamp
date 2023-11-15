import User from "../models/user.js";

export const userExists = async (uid = "") => {
    const userExists = await User.findById(uid);
    if (!userExists) {
        throw new Error(`User with id ${uid} does not exists`);
    }
    return true;
};

export const validateDate = (date = "") => {
    if (date && !validateDateInQuery(date)) {
        throw new Error(`Invalid Date`);
    }
    return true;
};

export const validateDateInQuery = (date = "") => {
    const parsedDate = !isNaN(date) ? new Date(Number(date)) : new Date(date);
    if (isNaN(parsedDate.getTime())) {
        return false;
    }
    return true;
};

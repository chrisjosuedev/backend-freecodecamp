import { validateDateInQuery } from "../helpers/customValidators.js";
import Exercise from "../models/exercise.js";
import User from "../models/user.js";

export const findAllUserLogs = async (req, res) => {
    const { from, to, limit = 0 } = req.query;
    const { _id } = req.params;
    try {
        let query = {};

        if (from && validateDateInQuery(from))
            query.date = { $gte: new Date(from) };
        if (to && validateDateInQuery(to))
            query.date = { ...query.date, $lte: new Date(to) };

        const userOwner = await User.findById(_id);
        const findAll = await Exercise.find(query)
            .limit(Number(limit))
            .where("user")
            .equals(_id);

        const logs = findAll.map((e) => ({
            description: e.description,
            duration: e.duration,
            date: (e.date).toDateString(),
        }));

        res.status(200).json({
            _id,
            username: userOwner.username,
            from: from ? new Date(from).toDateString() : from,
            to: to ? new Date(to).toDateString() : to,
            count: findAll.length,
            log: logs,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: `Something failed -> ${error}`,
        });
    }
};

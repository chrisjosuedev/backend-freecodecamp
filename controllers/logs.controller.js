import { validateDateInQuery } from "../helpers/customValidators.js";
import Exercise from "../models/exercise.js";

export const findAllUserLogs = async (req, res) => {
    const { from, to, limit = 0 } = req.query;
    const { _id } = req.params;
    try {
        let query = {};

        if (from && validateDateInQuery(from))
            query.date = { $gte: new Date(from) };
        if (to && validateDateInQuery(to))
            query.date = { ...query.date, $lte: new Date(to) };

        const findAll = await Exercise.find(query)
            .limit(Number(limit))
            .where("user")
            .equals(_id);

        res.status(200).json({
            username: "",
            count: findAll.length,
            _id,
            log: findAll,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: `Something failed -> ${error}`,
        });
    }
};

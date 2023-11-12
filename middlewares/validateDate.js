const validateDate = (req, res, next) => {
    const { date } = req.params;
    if (date) {
        const parsedDate = !isNaN(date) ? new Date(Number(date)) : new Date(date);
        // If date is a Number, convert it
        if (!isNaN(parsedDate.getTime())) {
            req.params.date = parsedDate;
            return next();
        }
    }
    return res.json({
        error: "Invalid Date",
    });
};

module.exports = {
    validateDate,
};

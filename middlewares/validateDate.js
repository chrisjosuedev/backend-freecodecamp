const validateDate = (req, res, next) => {
    const { date } = req.params;
    if (date) {
        const parsedDate = !isNaN(date)
            ? new Date(Number(date))
            : new Date(date);

        if (isNaN(parsedDate.getTime())) {
            return res.json({
                error: "Invalid Date",
            });
        }

        req.params.date = parsedDate;
    }
    next();
};

module.exports = {
    validateDate,
};

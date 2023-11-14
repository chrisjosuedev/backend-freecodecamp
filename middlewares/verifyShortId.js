const verifyShortId = (req, res, next) => {
    const { short_url } = req.params;

    if (!isNaN(short_url)) return next();

    return res.json({
        error: "Wrong format",
    });
};

module.exports = {
    verifyShortId,
};

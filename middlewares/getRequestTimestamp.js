const getRequestTimestamp = (req, res, next) => {
    req.time = new Date().toString();
    next();
};

module.exports = {
    getRequestTimestamp,
};

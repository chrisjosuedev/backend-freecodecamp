const { resolveDns } = require("../helpers/resolveDns");

const verifyUrl = async (req, res, next) => {
    const { url } = req.body;
    try {
        // Check if hostname is valid
        const { hostname } = new URL(url);

        // Resolve Hostname
        await resolveDns(hostname);
        
        next();
    } catch (error) {
        console.error(error);
        return res.json({
            error: "invalid url",
        });
    }
};

module.exports = {
    verifyUrl,
};

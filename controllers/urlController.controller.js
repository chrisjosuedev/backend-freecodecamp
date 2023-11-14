const UrlSchema = require("../models/UrlSchema");

const shortUrl = (req, res) => {
    const { url } = req.body;

    /**
     * TODO:
     * - Verify if already exists a URL and just return it
     * - Generate a Short url, save Url and return It
     */

    try {

        


        res.json({
            original_url: url,
            short_url: "im a short url",
        });
    } catch (error) {
        console.log(`Something failed -> ${error}`);
        res.json({
            error: `Unexpected error: ${error}`,
        });
    }
};

const getOriginalUrl = (req, res) => {
    // TODO -> Access to real URL
    // res.redirect('');

    res.json({});
};

module.exports = {
    shortUrl,
    getOriginalUrl,
};

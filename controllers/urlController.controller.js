const UrlSchema = require("../models/UrlSchema");

const shortUrl = async (req, res) => {
    const { url } = req.body;
    try {
        const urlFound = await UrlSchema.findOne({
            original_url: url,
        });

        if (!urlFound) {
            const newShortUrl = {
                original_url: url,
                short_url: new Date().getTime(),
            };

            const newUrl = new UrlSchema(newShortUrl);
            await newUrl.save(newUrl);

            return res.json(newShortUrl);
        }

        const { original_url, short_url } = urlFound;

        res.json({
            original_url,
            short_url,
        });
    } catch (error) {
        console.log(`Something failed -> ${error}`);
        res.json({
            error: `Unexpected error: ${error}`,
        });
    }
};

const getOriginalUrl = async (req, res) => {
    const { short_url } = req.params;

    try {
        const urlFound = await UrlSchema.findOne({
            short_url,
        });

        if (!urlFound) {
            return res.json({
                error: "No short URL found for the given input",
            });
        }

        const { original_url } = urlFound;

        res.redirect(original_url);
  
    } catch (error) {
        console.log(`Something failed -> ${error}`);
        res.json({
            error: `Unexpected error: ${error}`,
        });
    }
};

module.exports = {
    shortUrl,
    getOriginalUrl,
};

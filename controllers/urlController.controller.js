const UrlSchema = require("../models/UrlSchema");

const shortUrl = async (req, res) => {
    const { url } = req.body;
    const urlResponse = {
        original_url: "",
        short_url: "",
    };

    /**
     * TODO:
     * - Verify if already exists a URL and just return it
     * - Generate a Short url, save Url and return It
     */

    try {
        const urlFound = await UrlSchema.findOne({
            originalUrl: url,
        });

        console.log(urlFound);

        if (!urlFound) {
            console.log('nothing found');
            
            // create new url
            /**
             *
             *
             */

            urlResponse.original_url = 'new value from urlFound';
            urlResponse.short_url = 'new value from urlFound';
        }

        urlResponse.original_url = 'new value';
        urlResponse.short_url = 'new value';

        res.json(urlResponse);
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

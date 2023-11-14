const verifyShortId = require("./verifyShortId");
const verifyUrl = require("./verifyUrl");

module.exports = {
    ...verifyShortId,
    ...verifyUrl,
};

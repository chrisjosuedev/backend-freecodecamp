const dns = require("dns");

const dnsOptions = {
    family: 6,
    hints: dns.ADDRCONFIG | dns.V4MAPPED,
};

const resolveDns = (url = "") => {
    return new Promise((resolve, reject) => {
        dns.lookup(url, dnsOptions, (err, addresses) => {
            if (err) {
                reject(`Error: ${err}`);
            } else {
                resolve(addresses);
            }
        });
    });
};

module.exports = {
    resolveDns,
};

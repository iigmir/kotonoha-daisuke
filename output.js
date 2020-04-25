const fs = require("fs");

module.exports = (data = {}) =>
{
    fs.writeFile( "result.json", data, (err) => {
        if (err) throw err;
    });
};

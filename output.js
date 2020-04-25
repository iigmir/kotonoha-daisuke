const fs = require("fs");

module.exports = async (data = {}) =>
{
    let json = await data;
    fs.writeFile( "result.json", JSON.stringify(json), (err) => {
        if (err) throw err;
    });
};

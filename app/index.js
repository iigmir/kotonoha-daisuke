const request = require("./request-module.js");
const parser = require("./parser-module.js");

module.exports = async (url = "https://dq.yam.com/post.php?id=12432") =>
{
    const content = await request(url);
    let result = {};
    if( content )
    {
        result = parser( content );
        return result;
    }
    throw new Error("Something unusual thing happened!");
};
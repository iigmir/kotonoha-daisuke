import https from "https";

export default (input = "12436") =>
{
    const options = {
        hostname: "dq.yam.com",
        port: 443,
        path: `/post/${input}`,
        method: "GET",
    }
    
    return new Promise( (resolve, reject)  => {
        const req = https.request(options, res =>
        {
            res.on("data", data => { resolve(data) })
        });
        req.on("error", error => { reject(error) });
        req.end();
    });
};
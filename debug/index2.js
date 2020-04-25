const https = require("https");
const axios = require("axios");
// Make a request for a user with a given ID
const req2 = axios.get("https://dq.yam.com/post.php?id=12432");

const options = {
    hostname: "dq.yam.com",
    port: 443,
    path: "/post.php?id=12432",
    method: "GET"
};

const req = https.request( options, (res) => {
    let body = "";
    res.setEncoding("utf8");
    res.on("data", (chunk) => {
        body += chunk;
    });
    res.on("end", function() {
        // console.log(body);
    });
});
req.on('error', (e) => {
    console.error(e);
});
req.end();

req2.then(function (response) {
    console.log(response);
    debugger;
});
req2.catch(function (error) {
    console.log(error);
    debugger;
});
req2.then(function () {
    // always executed
    debugger;
});

const axios = require("axios");

async function request_module( url = "https://dq.yam.com/post.php?id=12432" ) {
    try {
        const response = await axios.get( url );
        return response.status === 200 ? response.data : false;
    } catch (error) {
        throw new Error( error );
    }
}

module.exports = request_module;

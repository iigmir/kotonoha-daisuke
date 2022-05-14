import ajax from "./app/ajax/library.js";
import convert from "xml-js";

const api = "https://dq-api.azurewebsites.net/f-system/get-rss";

const request = (api = "https://dq-api.azurewebsites.net/f-system/get-rss") =>
{
    return new Promise( (resolve, reject) =>
    {
        const req = ajax(api);
        console.log(ajax, req);
        req.then( content => {
            resolve( convert.xml2json(content, { compact: true, spaces: 4 }) );;
        }).catch( e => reject(e) );
    });
};

request(api).then( cresult =>
{
    console.log(cresult);
});

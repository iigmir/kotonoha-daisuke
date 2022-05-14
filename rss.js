import ajax from "./app/ajax/library.js";
import convert from "xml-js";

const api = "https://dq-api.azurewebsites.net/f-system/get-rss";
const request = (api = "https://dq-api.azurewebsites.net/f-system/get-rss") =>
{
    return new Promise( ajax(api) );
};
request(api).then( xml =>
{
    const result = JSON.parse( convert.xml2json(xml, { compact: true }) );
    const ids = result.rss.channel.item.map( ({ link }) => link._text.replace(/[^0-9]/g, "") );
    console.log(ids);
});

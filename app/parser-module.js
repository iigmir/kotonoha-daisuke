const cheerio = require("cheerio");
const default_text = `<!doctype html><html><head><title>Hello World</title><meta charset="utf-8" /></head><body><div><h1>Hello World</h1></div></body></html>`;
const Meta = require( "./Meta.js" );

module.exports = ( content = default_text ) =>
{
    let meta = new Meta( content );
    let meta_result = meta.result();
    debugger;
}
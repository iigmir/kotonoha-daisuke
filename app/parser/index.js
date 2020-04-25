const default_text = `<!doctype html><html><head><title>Hello World</title><meta charset="utf-8" /></head><body><div><h1>Hello World</h1></div></body></html>`;
const Meta = require( "./Meta.js" );
const Content = require( "./Content.js" );

module.exports = ( content = default_text ) =>
{
    let meta = new Meta( content ).result();
    let contents = new Content( content ).result();
    return { meta, contents };
}
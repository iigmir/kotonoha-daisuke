const default_text = `<!doctype html><html><head><title>Hello World</title><meta charset="utf-8" /></head><body><div><h1>Hello World</h1></div></body></html>`;
const Meta = require( "./Meta.js" );
const Content = require( "./Content.js" );
const Reference = require( "./Reference.js" );

module.exports = ( content = default_text ) =>
{
    const meta = new Meta( content ).result();
    const contents = new Content( content ).result();
    const references = new Reference( content ).result();
    return { meta, contents, references };
}
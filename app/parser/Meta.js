const { parse } = require("node-html-parser");
const default_text = `<!doctype html><html><head><title>Hello World</title><meta charset="utf-8" /></head><body><div><h1>Hello World</h1></div></body></html>`;

module.exports = class Meta {
    constructor( content = default_text )
    {
        this.source_content = content;
    }
    result()
    {
        const select = (selector = "") => {
            let qs = parse( this.source_content ).querySelector( selector );
            return qs === null ? "" : qs.innerHTML;
        };
        return {
            title: select( "#mainContent article header h1" ),
            date: select( "#mainContent article header .headerBar time" ),
            author: select( "#mainContent article header .headerBar .author" ),
            repost: select( "#mainContent article .repost .box" )
        };
    }
}
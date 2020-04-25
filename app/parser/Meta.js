const { parse } = require("node-html-parser");
const default_text = `<!doctype html><html><head><title>Hello World</title><meta charset="utf-8" /></head><body><div><h1>Hello World</h1></div></body></html>`;

module.exports = class Meta {
    constructor( content = default_text )
    {
        this.source_content = content;
    }
    get_title( import_selector = "" )
    {
        let document = parse( this.source_content );
        let child = document.querySelectorAll( import_selector );
        return child[0].innerHTML;
    }
    get_date( import_selector = "" )
    {
        let document = parse( this.source_content );
        return document.querySelector( import_selector ).innerHTML;
    }
    get_author( import_selector = "" )
    {
        let document = parse( this.source_content );
        return document.querySelector( import_selector ).innerHTML;
    }
    get_repost( import_selector = "" )
    {
        let document = parse( this.source_content );
        let qs = document.querySelector( import_selector );
        return qs === null ? "" : qs.innerHTML;
    }
    result()
    {
        let title = this.get_title( "#mainContent article header h1" );
        let date = this.get_date( "#mainContent article header .headerBar time" );
        let author = this.get_author( "#mainContent article header .headerBar .author" );
        let repost = this.get_repost( "#mainContent article .repost .box" );
        return { title, date, author, repost };
    }
}
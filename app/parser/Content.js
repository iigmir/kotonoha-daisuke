const { parse } = require("node-html-parser");
const default_text = `<!doctype html><html><head><title>Hello World</title><meta charset="utf-8" /></head><body><div><h1>Hello World</h1></div></body></html>`;

module.exports = class Content {
    constructor( content = default_text )
    {
        this.source_content = content;
        this.dom_list = [];
        this.article_source = [];
        this.generate_dom_tree();
    }
    old()
    {
        const selectors = [
            "#mainContent article > .innerContent p",
            "#mainContent article .imgBox figure img",
            "#mainContent article .imgBox figure figcaption",
            "#mainContent article .imgBox .innerContent h1",
            "#mainContent article .imgBox .innerContent h2",
            "#mainContent article .imgBox .innerContent h3",
            "#mainContent article .imgBox .innerContent p"
        ];
        switch ( element.tagName ) {
            case "img": return element.attributes.src;
            case "figcaption": return element.structuredText;
            case "h2": return element.rawText;
            case "p": return element.rawText;
            // element.rawText
            default: return "";
        }
        // selectors.join(", ")
        // "#mainContent article .imgBox"
    }
    generate_dom_tree()
    {
        this.dom_list = parse( this.source_content ).querySelectorAll( "#mainContent article .imgBox" );
    }
    generate_article_source()
    {
        const content_selectors = [ "figure img", "figure figcaption", "h2", "p" ];
        this.article_source = this.dom_list.map( dom => dom.querySelectorAll( content_selectors.join(", ") ) );
    }
    result()
    {
        this.generate_article_source();
        return this.article_source.map( article =>
        {
            return article.map( element =>
            {
                const dom_dictonary = {
                    "figcaption": "structuredText",
                    "h2": "rawText",
                    "p": "rawText",
                };
                if( element.tagName === "img" )
                {
                    return element.attributes.src;
                }
                return element[ dom_dictonary[ element.tagName ] ];
            });
        });
    }
}
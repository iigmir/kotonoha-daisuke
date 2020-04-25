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
    generate_dom_tree()
    {
        this.dom_list = parse( this.source_content ).querySelectorAll( "#mainContent article .imgBox" );
    }
    generate_article_source()
    {
        const content_selectors = [ "figure img", "figure figcaption", "h2", "p" ];
        this.article_source = this.dom_list.map( dom => dom.querySelectorAll( content_selectors.join(", ") ) );
    }
    add_intro()
    {
        // "「亞美利加」（America）這四個字的最佳演唱方式為何？" @ https://dq.yam.com/post.php?id=12436
        let introtext = parse( this.source_content ).querySelectorAll( ".innerContent p" );
    }
    result()
    {
        this.generate_article_source();
        return this.article_source.map( article => article.map( element =>
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
            })
        );
    }
}
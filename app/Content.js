const { parse } = require("node-html-parser");
const default_text = `<!doctype html><html><head><title>Hello World</title><meta charset="utf-8" /></head><body><div><h1>Hello World</h1></div></body></html>`;

module.exports = class Meta {
    constructor( content = default_text )
    {
        this.source_content = content;
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
        // selectors.join(", ")
        // "#mainContent article .imgBox"
    }
    virtual_tree( content = "<div></div>" )
    {
        let template_head = `<head><title>Virtual DOM Tree</title><meta charset="utf-8" /></head>`;
        let template_body = `<body>${ content }</body>`;
        let template = `<!doctype html><html> ${ template_head } ${ template_body } </html>`;
        return parse( template );
    }
    result()
    {
        const list = parse( this.source_content ).querySelectorAll( "#mainContent article .imgBox" );
        const result = list.map( dom =>
        {
            const figure = dom.querySelectorAll("figure img, figure figcaption");
            const article = dom.querySelectorAll("h2, p");
            debugger;
        });
        debugger;
        return result;
    }
}
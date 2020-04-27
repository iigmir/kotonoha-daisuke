const { parse } = require("node-html-parser");
const default_text = `<!doctype html><html><head><title>Hello World</title><meta charset="utf-8" /></head><body><div><h1>Hello World</h1></div></body></html>`;

module.exports = class Reference {
    constructor( content = default_text )
    {
        this.source_content = content;
        this.dom_list = [];
        this.readmore = {};
        this.reference = {};
        this.generate_dom_tree();
    }
    generate_dom_tree()
    {
        const selectors = [
            "#mainContent article .imgBox .sectionWrap section h4",
            "#mainContent article .imgBox .sectionWrap section li",
            "#mainContent article .imgBox .sectionWrap #reference-material h4",
            "#mainContent article .imgBox .sectionWrap #reference-material li"
        ];
        this.dom_list = parse( this.source_content ).querySelector( "#mainContent article .imgBox .sectionWrap" );
    }
    list_is_vaild()
    {
        return this.dom_list !== null && this.dom_list.querySelectorAll("section li") !== null;
    }
    result()
    {
        let result = [];
        if( this.list_is_vaild() )
        {
            result = this.dom_list.querySelectorAll("section li").map( dom =>
            {
                return {
                    name: dom.structuredText,
                    href: dom.querySelector("a").attributes.href
                };
            });
        }
        return result;
    }
}
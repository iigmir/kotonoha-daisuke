// const { parse } = require("node-html-parser");
import nhp from "node-html-parser";

export default ( input = "" ) =>
{
    // const { document } = new JSDOM(input).window;
    const article = nhp.parse( input ).querySelector("article");
    const reposst_data = article.querySelector( "#mainContent article .repost .box" );
    return {
        meta: {
            title: article.querySelector("h1").textContent,
            date: article.querySelector("time").textContent,
            author: article.querySelector(".author").textContent,
            repost: reposst_data ? reposst_data.textContent : "",
        },
        contents: [...article.querySelectorAll(".innerContent p")].map( e=>
            e.textContent
        ),
        images: [...article.querySelectorAll("figure")].map( el => ({
            src: el.querySelector("img").src,
            txt: el.querySelector("figcaption").textContent,
        })),
        references: [...article.querySelectorAll(".sectionWrap a")].map(e=>(
            { href: e.href, name: e.textContent, }
        ))
    };
};

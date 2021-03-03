import nhp from "node-html-parser";

export default ( input = "" ) =>
{
    const article = nhp.parse( input ).querySelector("article");
    const reposst_data = article.querySelector( "#mainContent article .repost .box" );
    return {
        meta: {
            title: article.querySelector("h1").rawText,
            date: article.querySelector("time").rawText,
            author: article.querySelector(".author").rawText,
            repost: reposst_data ? reposst_data.rawText : "",
        },
        contents: [...article.querySelectorAll(".innerContent p")].map( e=>
            e.rawText
        ),
        images: [...article.querySelectorAll("figure")].map( el => ({
            src: el.querySelector("img").attributes.src,
            txt: el.querySelector("figcaption").text,
        })),
        references: [...article.querySelectorAll(".sectionWrap a")].map(e=>(
            { href: e.attributes.href, name: e.text, }
        ))
    };
};

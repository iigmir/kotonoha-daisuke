import nhp from "node-html-parser";

export default ( input = "" ) =>
{
    const article = nhp.parse( input ).querySelector("article");
    const reposst_data = article.querySelector( "#mainContent article .repost .box" );
    return {
        meta: {
            title: article.querySelector("h1")?.rawText ?? null,
            date: article.querySelector("time")?.rawText ?? null,
            author: article.querySelector(".author")?.rawText ?? null,
            repost: reposst_data.rawText ?? null,
        },
        contents: [...article.querySelectorAll(".innerContent p")].map( e=>
            e.rawText
        ),
        images: [...article.querySelectorAll("figure")].map( el => ({
            src: el.querySelector("img").attributes?.src ?? null,
            txt: el.querySelector("figcaption")?.text ?? null,
        })),
        references: [...article.querySelectorAll(".sectionWrap a")].map(e=>({
                href: e.attributes?.href ?? null,
                name: e.text ?? null,
            })
        )
    };
};

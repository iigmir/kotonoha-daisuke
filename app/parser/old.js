import nhp from "node-html-parser";

export default ( input = "" ) =>
{
    const reposst_data = nhp.parse( input ).querySelector( "#mainContent article" );
    return {
        meta: {
            title: reposst_data.querySelector("h1")?.rawText ?? null,
            date: reposst_data.querySelector("time")?.rawText ?? null,
            author: reposst_data.querySelector(".author")?.rawText ?? null,
            repost: reposst_data.rawText ?? null,
        },
        contents: [...reposst_data.querySelectorAll(".innerContent p")].map( e=>
            e.rawText
        ),
        images: [...reposst_data.querySelectorAll("figure")].map( el => ({
            src: el.querySelector("img").attributes?.src ?? null,
            txt: el.querySelector("figcaption")?.text ?? null,
        })),
        references: [...reposst_data.querySelectorAll(".sectionWrap a")].map(e=>({
                href: e.attributes?.href ?? null,
                name: e.text ?? null,
            })
        )
    };
};

import https from "https";

export default (input = "12436") =>
{
    const url = `https://dq.yam.com/post/${String(input)}`;
    return new Promise( (resolve, reject)  => {
        const req = https.get(url, res =>
        {
            res.setEncoding("utf8");
            let html_text = "";
            res.on( "data", chunk => { html_text += chunk });
            req.on( "error", error => { reject(error) });
            res.on( "end", () =>
            {
                try {
                    resolve(html_text);
                } catch (e) {
                    console.error(e.message);
                    reject(e);
                }
            });
        });
    });
};
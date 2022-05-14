import library from "./library.js";

export default (input = "12436") =>
{
    const url = `https://dq.yam.com/post/${String(input)}`;
    return new Promise( library(url) );
};

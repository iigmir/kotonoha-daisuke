const app = require("./app/index.js");
const output = require("./output.js");

const main = async( input = "" ) => output( app( input ) );
main( process.argv[2] );

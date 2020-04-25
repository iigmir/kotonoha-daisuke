const app = require("./app/index.js");
const output = require("./output.js");

output( app( process.argv[2] ) );

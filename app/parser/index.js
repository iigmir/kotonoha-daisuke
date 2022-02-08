import nhp from "node-html-parser";
import vm from "vm";

export default ( input = "" ) =>
{
    const scripts = nhp.parse( input ).querySelectorAll( "script" );
    const key_regex = /window.__NUXT__=/g;
    const get_nuxt = ({ rawText }) => key_regex.test( rawText );
    const source_script = [...scripts].filter( get_nuxt )[0] ?? { rawText: "" };
    const source = source_script.rawText.replace( key_regex, "var result=" );
    // Render
    const context = vm.createContext({ result: {} });
    vm.runInContext(source, context);
    debugger;
    return { source: source, result: context.result };
};

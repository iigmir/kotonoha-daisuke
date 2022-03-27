import nhp from "node-html-parser";
import vm from "vm";

export default ( input = "" ) =>
{
    // Regex texts
    const key_regex = /window.__NUXT__=/g;
    const replaced_text = "var result=";
    const get_nuxt = ({ rawText }) => key_regex.test( rawText );
    // Scripts
    const scripts = nhp.parse( input ).querySelectorAll( "script" );
    const source_script = [...scripts].filter( get_nuxt )[0] ?? { rawText: "" };
    const source = source_script.rawText.replace( key_regex, replaced_text );
    // Render
    const context = vm.createContext({ result: {} });
    vm.runInContext(source, context);
    return { source: source, result: context.result };
};

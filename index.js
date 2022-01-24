/* import customSize from './assets/customSize.js'
import colorScale from './assets/colorScale.js';


loadCSS(filename)

function loadCSS(filename){ 

    var file = document.createElement("link");
    file.setAttribute("rel", "stylesheet");
    file.setAttribute("type", "text/css");
    file.setAttribute("href", filename);
    document.head.appendChild(file);
 
 } */

/*  import sheet from './assets/skan.css!text' assert {type:'css'};
 document.adoptedStyleSheets = [sheet];
console.log(sheet) */


/* const sheet = new CSSStyleSheet();
sheet.replace("${filename}")
    .then(() => {
    console.log('Styles replaced');
  })
  .catch(err => {
    console.error('Failed to replace styles:', err);
  });;

 */

//shadowRoot.adoptedStyleSheets = [sheet];
/* const cssModule = await import('./assets/skan.css', {
  assert: { type: 'css' }
});
document.adoptedStyleSheets = [cssModule.default]; */


// dependencies
/* const fs = require("fs")
const postcss = require("postcss")
const atImport = require("postcss-import")

// css to be processed
const css = fs.readFileSync("./assets/skan.css", "utf8")

// process css
postcss()
  .use(atImport())
  .process(css, {
    // `from` option is needed here
    from: "css/input.css"
  })
  .then((result) => {
    const output = result.css

    console.log(output)
  }) */
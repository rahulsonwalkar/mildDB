const fs = require('fs');

let custom_styling_css = fs.readFileSync("templates/docdash-styling.css")

fs.writeFile("docs/styles/jsdoc.css", custom_styling_css, function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("Custom styling applied to docs!");
});

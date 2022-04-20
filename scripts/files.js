const glob = require("glob");
const path = require("path");
const fs = require("fs");

const render = require("./render.js");

const components = new Map();

glob("../tmp/backend/components/**/*.js", (err, files) => {
    if (err) {

        console.error(err);
        process.exit(1);

    } else {

        files.forEach((file) => {

            // resolve to absolut path
            file = path.resolve(__dirname, file);

            let filename = path.basename(file);
            let target = path.dirname(file);
            let folder = path.basename(target);

            if (!components.has(folder)) {
                components.set(folder, new Set());
            }

            // swamp tmp with out
            target = target.replace("tmp", "docs");

            /*
            if (!fs.existsSync(target)) {
                console.log("Create target dir: ", target)
                fs.mkdirSync(target, {
                    recursive: true
                });
            }
            */

            //console.log(target)



            if (filename === "index.js") {

                target = path.join(target, `README.md`);
                components.get(folder).add(target);

                render(file, target, {
                    filename
                });

            } else {

                target = path.join(target, `${filename}.md`);
                components.get(folder).add(target);

                render(file, target, {
                    filename
                });

            }



        });

        // GENERATE FROM MAP SIDEBAR CONTENTS
        console.log(components)

    }
});
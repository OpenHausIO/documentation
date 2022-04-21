const path = require("path");
const glob = require("glob");
const render = require("./render.js");

module.exports = (pattern, store) => {
    return new Promise((resolve, reject) => {
        glob(path.join(process.env.SOURCE_BACKEND, pattern), (err, files) => {
            if (err) {

                reject(err);

            } else {

                files.filter((file) => {

                    // ignore files that start with !
                    // does are mostly old and can be removed
                    return path.basename(file)[0] !== "!";

                }).forEach((file) => {

                    // resolve to absolut path
                    file = path.resolve(__dirname, file);

                    let filename = path.basename(file);
                    let target = path.dirname(file);
                    let folder = path.basename(target);

                    if (!store.has(folder)) {
                        store.set(folder, new Set());
                    }

                    // swamp tmp with out
                    target = target.replace("tmp", "docs");

                    if (filename === "index.js") {

                        target = path.join(target, `README.md`);
                        //components.get(folder).add("README.md");

                        render(file, target, {
                            filename
                        });

                    } else {

                        target = path.join(target, `${filename}.md`);
                        store.get(folder).add(`${filename}`);

                        render(file, target, {
                            filename
                        });

                    }

                });

                resolve();

            }
        });
    });
};
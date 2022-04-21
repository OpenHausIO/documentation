const path = require("path");
const fs = require("fs");

const Mustache = require("mustache");

const globber = require("./globber.js");

const components = new Map();
const helper = new Map();
const system = new Map();


Promise.all([
    globber("components/**/*.js", components),
    globber("helper/**/*.js", helper),
    globber("system/**/*.js", system),
]).then(() => {

    let comps = [];
    let systems = [];
    let helpers = [];

    for (let [key, value] of components) {
        comps.push({
            title: key[0].toUpperCase() + key.substr(1),
            path: key,
            files: Array.from(value)
        });
    }

    for (let [key, value] of system) {
        systems.push({
            title: key[0].toUpperCase() + key.substr(1),
            path: key,
            files: Array.from(value)
        });
    }

    for (let [key, value] of helper) {
        helpers.push({
            title: key[0].toUpperCase() + key.substr(1),
            path: key,
            files: Array.from(value)
        });
    }

    const template = fs.readFileSync(path.resolve(process.cwd(), "templates/_sidebar.mst"), "utf8");

    const output = Mustache.render(template, {
        backend: {
            components: comps,
            helper: helpers,
            system: systems
        }
    }, {
        administration: fs.readFileSync(path.resolve(process.cwd(), "templates/partials/nav.administration.mst"), "utf8"),
        backend: fs.readFileSync(path.resolve(process.cwd(), "templates/partials/nav.backend.mst"), "utf8"),
        frontend: fs.readFileSync(path.resolve(process.cwd(), "templates/partials/nav.frontend.mst"), "utf8"),
        //connector: fs.readFileSync(path.resolve(process.cwd(), "templates/partials/nav.connector.mst"), "utf8")
    });

    //console.log(output)

    fs.writeFileSync(path.resolve(process.cwd(), "docs/_sidebar.md"), output);

}).catch((err) => {

    console.error(err);
    process.exit(1);

});
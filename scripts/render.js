const fs = require("fs");
const path = require("path");
const { parse } = require('comment-parser');
const Mustache = require("mustache");
const util = require("util");
const { URL } = require("url")

//Mustache.escape = function (text) { return text; };

module.exports = (input, output, data) => {

    const source = fs.readFileSync(input, "utf8");
    const template = fs.readFileSync(path.resolve(process.cwd(), "templates/main.mst"), "utf8");


    const parsed = parse(source, {
        spacing: "preserve"
    });


    const fillings = Object.assign({
        filename: "", // "class.base.js"
        filepath: input.replace(process.env.SOURCE_BACKEND, ""),
        className: null,
        description: "",
        properties: [],
        parameter: [],
        examples: [],
        events: [],
        methods: [],
        links: [],
        extends: null,
        args: function () {

            let output = "";

            // TODO handle optional parameter
            // TODO handle default values
            this.params.forEach(({ name, optional }, i, arr) => {

                output += `${name}`;

                if (i + 1 < arr.length) {
                    output += ", ";
                }

            });

            return output;

        }
    }, data);

    parsed.forEach((block, i, arr) => {

        // each block = /** <what ever here> */

        // delete unecassary stuff
        delete block.source;


        // check if block of comment is class declaration
        // check if block is a function documentation    

        if (block.tags.some(({ tag }) => { return tag === "class" })) {

            block.tags.forEach(({ tag, name, type, optional, description }, i, arr) => {
                if (tag === "description") {

                    fillings.description = description;

                } else if (tag === "property") {

                    fillings.properties.push({
                        name,
                        type,
                        optional,
                        description: description.trim()
                    });

                } else if (tag === "emits") {

                    fillings.events.push({
                        name,
                        description: description.trim()
                    });

                } else if (tag === "class") {

                    fillings.className = name;

                } else if (tag === "param") {

                    //console.warn("Param declration in class found, @implement:", arr[i].source[0].number, input);
                    fillings.parameter.push({
                        name,
                        type,
                        optional,
                        description: description.trim()
                    });

                } else if (tag === "example") {

                    fillings.examples.push(description)

                } else if (tag === "see") {

                    //console.log("internal class link:", name, description, input);

                    fillings.links.push({
                        name: name.trim(),
                        href: `/backend/${description.trim()}`
                    });

                } else if (tag === "link") {

                    // external link
                    fillings.links.push({
                        name,
                        href: name.trim()
                    });

                } else if (tag === "extends") {

                    fillings.extends = {
                        name,
                        link: null
                    };

                    if (description.trim()) {

                        if (new RegExp(/(http|\/\/)/gi).test(description.trim())) {
                            fillings.extends.link = description.trim()
                        } else {
                            fillings.extends.link = `backend/${description.trim()}`
                        }

                    }

                } else {

                    console.error("> Unsporrted tag found in class declaration: %s, line: %d in %s", tag, arr[i].source[0].number, input);

                }
            });

        } else if (block.tags.some(({ tag }) => { return tag === "function" })) {


            // method local variables
            let obj = {
                static: false,
                deprecated: false,
                params: [],
                examples: [],
                returns: [],
                links: []
            };

            block.tags.forEach(({ tag, name, type, optional, description }, i, arr) => {
                if (tag === "function") {

                    Object.assign(obj, {
                        name,
                        description,
                    });

                } else if (tag === "param") {

                    obj.params.push({
                        name,
                        type,
                        optional,
                        description: description.trim()
                    });

                } else if (tag === "returns") {

                    obj.returns.type = type;
                    obj.returns.description = name + " " + description;

                } else if (tag === "example") {

                    obj.examples.push(description);

                } else if (tag === "static") {

                    obj.static = true;

                } else if (tag === "see") {

                    //console.log("internal function link:", name, description, input)

                    obj.links.push({
                        name: name.trim(),
                        href: `/backend/${description.trim()}`
                    });

                } else if (tag === "link") {

                    // external link
                    obj.links.push({
                        name,
                        href: name.trim()
                    });

                } else if (tag === "deprecated") {

                    obj.deprecated = true;

                } else {

                    console.error("> Unsporrted tag found in function declartion: %s, line: %d in %s", tag, arr[i].source[0].number, input);

                }
            });


            // add method to template filling
            fillings.methods.push(obj);


        } else if (block.tags.some(({ tag }) => { return tag === "description" })) {

            block.tags.forEach(({ tag, name, type, optional, description }, i, arr) => {
                if (tag === "description") {

                    fillings.description = description;

                } else if (tag === "example") {

                    fillings.examples.push(description);

                }
            });

        } else {

            console.error("> Code block is neither a class,function nor a documentation declration: '%s'", arr[i].description.trim(), input);

        }

    });




    //console.log(fillings.methods[0])

    let rendered = Mustache.render(template, fillings);

    // create folder structure if it does not exists
    if (!fs.existsSync(path.dirname(output))) {
        fs.mkdirSync(path.dirname(output), {
            recursive: true
        });
    }

    //console.log(rendered)
    fs.writeFileSync(output, rendered);

};
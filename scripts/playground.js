const fs = require("fs");
const { parse } = require('comment-parser');
const Mustache = require("mustache");
const util = require("util");

//Mustache.escape = function (text) { return text; };

console.clear();

const source = fs.readFileSync("class.js", "utf8");
const template = fs.readFileSync("../templates/class.mst", "utf8");
const parsed = parse(source, {
    spacing: "preserve"
});


const fillings = {
    filename: "class.base.js",
    className: "",
    description: "",
    properties: [],
    examples: [],
    events: [],
    methods: [],
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
};

parsed.forEach((block, i) => {

    // each block = /** <what ever here> */

    // delete unecassary stuff
    delete block.source;


    // check if block of comment is class declaration
    // check if block is a function documentation    

    if (block.tags.some(({ tag }) => { return tag === "class" })) {


        block.tags.forEach(({ tag, name, type, optional, description }) => {
            if (tag === "description") {

                fillings.description = description;

            } else if (tag === "property") {

                fillings.properties.push({
                    name,
                    type,
                    optional,
                    description
                });

            } else if (tag === "emits") {

                fillings.events.push({
                    name,
                    description
                });

            } else if (tag === "class") {

                fillings.className = name;

            } else if (tag === "exmaple") {

                fillings.examples.push(description)

            } else {

                console.error("> Unsporrted tag found in class declaration:", tag);

            }
        });


    } else if (block.tags.some(({ tag }) => { return tag === "function" })) {


        // method local variables
        let obj = {
            static: false,
            params: [],
            examples: [],
            returns: []
        }

        block.tags.forEach(({ tag, name, type, optional, description }) => {
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
                    description
                });

            } else if (tag === "returns") {

                obj.returns.type = type;
                obj.returns.description = name + " " + description;

            } else if (tag === "example") {

                obj.examples.push(description);

            } else if (tag === "static") {

                obj.static = true;

            } else {

                console.error("> Unsporrted tag found in function declartion:", tag);

            }
        });

        // add method to template filling
        fillings.methods.push(obj);


    } else {

        console.error("> Code block is neither a class nor a function declration");

    }

});


//console.log(fillings.methods[0])

let rendered = Mustache.render(template, fillings);
//console.log(rendered)
fs.writeFileSync("./class.js.md", rendered);

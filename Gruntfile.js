const pkg = require("./package.json");

module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg,
        env: {
            options: {
                //Shared Options Hash
            },
            prod: {
                NODE_ENV: "production",
            }
        },
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks("grunt-env");

    grunt.registerTask("backend:components", () => {

    });

    grunt.registerTask("backend:helper", () => {

    });

    grunt.registerTask("backend:system", () => {

    });

    grunt.registerTaks("backend", [
        "backend:helper",
        "backend:system",
        "backend:components"
    ]);

};
module.exports = {
    presets: [
        require("babel-preset-es2015"), require("babel-preset-stage-0")
    ],
    plugins: [
       require("babel-plugin-transform-class-properties"),require("babel-plugin-syntax-object-rest-spread")
        // , require("babel-plugin-transform-decorators-legacy")
    ]
};

const { plugin } = require("postcss");
const { postcss } = require("tailwindcss");

module.exports = {
    style:{
        postcss:{
            plugins:[
            require('tailwindcss'),
            require('autoprefixer'),
            ]   
        },
    },
};
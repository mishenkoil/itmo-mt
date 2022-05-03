module.exports = {
    plugins: [
        [require("@babel/plugin-proposal-class-properties"), {loose: false}],
        "@babel/plugin-transform-modules-commonjs"
    ],
    presets: ['@babel/preset-env', '@babel/preset-typescript'],
}
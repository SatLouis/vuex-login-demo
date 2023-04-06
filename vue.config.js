const path = require('path');
const {defineConfig} = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  publicPath: './',
  // chainWebpack: (config) => {
  //   config.resolve.alias.set('@', path.resolve(__dirname, './src'));
  // },
});

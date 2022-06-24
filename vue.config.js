const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.BASE_URL,
  pages: {
    index: {
      entry: './src/main.js',
      template: './public/index.html',
      filename: 'index.html',
      title: 'Index Page',
      chunks: ['chunk-vendors', 'chunk-common', 'index'],
    },
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'https://localhost:44326/api', // https://{Domain}/api/
        pathRewrite: { '^/api': '' },
        changeOrigin: true,
        ws: true,
      },
    },
  },
});

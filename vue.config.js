module.exports = {
  baseUrl: '/',
  configureWebpack: {
    devtool: 'source-map'
  },
  chainWebpack: (config) => {
    // Add file loader to copy config file to dist
    config
      .module
      .rule('config')
      .test(/\.(txt|yml|xml)$/)
      .use('file')
      .loader('file-loader')
      .options({
        name: '[name].[ext]',
        outputPath: '/',
        publicPath: '/',
      });
  }
}

module.exports = {
  baseUrl: process.env.NODE_ENV === 'production'
    ? '/iamstevendao.com/'
    : '/',
  chainWebpack: (config) => {
    // Add file loader to copy config file to dist
    config
      .module
      .rule('yml')
      .test(/\.yml$/)
      .use('file')
      .loader('file-loader')
      .options({
        name: '[name].[ext]',
        outputPath: '/',
        publicPath: '/',
      });
  }
}

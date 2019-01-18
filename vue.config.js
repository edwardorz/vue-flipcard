const argv = require('minimist')(process.argv.slice(2))

module.exports = {
  productionSourceMap: false,
  publicPath: '/vue-flipcard',
  devServer: {
    open: true
  },
  css: { extract: argv.target !== 'lib' }
}

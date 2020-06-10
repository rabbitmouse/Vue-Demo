const path = require('path');
function resolve (dir) {
    return path.join(__dirname, dir)
}
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
      }
    }
  }
//   chainWebpack: (config)=>{
//     config.resolve.alias
//         .set('@$', resolve('src'))
//         .set('assets',resolve('src/assets'))
//         .set('components',resolve('src/components'))
//         .set('layout',resolve('src/layout'))
//         .set('base',resolve('src/base'))
//         .set('static',resolve('src/static'))
// }

}
import path from "path";

// vue.config.js
module.exports = {
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      // config for production...
      config.plugin(MyProdPlugin)
    } else {
      // config for development...
      config.plugin(MyDevPlugin)
    }
  }
}

// Custom Properties Plugins
const MyProdPlugin = {

}
const MyDevPlugin = {
  // staticDir: path.join(__dirname, 'dist'),
  // routes: ['/', '/home', '/dashboard'],
}
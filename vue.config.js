const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
    configureWebpack: {
        resolve: {
            // 使用@ 指代src根目录
            alias: {
                '@': resolve('src'),
            }
        }
    },
}
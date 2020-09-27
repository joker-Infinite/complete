module.exports = {
  pluginOptions: {
    express: {
      shouldServeApp: true,
      serverDir: "./srv"
    }
  },
  devServer: {
    port: 8888, // 端口号配置
    proxy: {
      "/api": {
        target: "http://192.168.0.98:3000",
        changeOrigin: true,
        pathRewrite: {
          "^/api": ""
        }
      }
    }
  },
  lintOnSave: false,
};

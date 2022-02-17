const path = require("path");
const RefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
module.exports = {
  mode: "development",
  devtool: "eval",
  resolve: {
    extensions: [".js", ".jsx"],
  },

  // 입력
  entry: {
    app: ["./client"],
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        loader: "babel-loader",
        options: {
          presets: [
            [
              "@babel/preset-env",
              {
                targets: {
                  browsers: ["> 5% in KR", "last 2 chrome versions"],
                },
                debug: true,
              },
            ],
            "@babel/preset-react",
          ],
          plugins: ["react-refresh/babel"],
        },
      },
    ],
  },
  plugins: [new RefreshWebpackPlugin()],
  // 출력
  output: {
    path: path.join(__dirname, "dist"), // 현재폴더(__dirname)에 있는 dist폴더안 내용을 병합
    filename: "app.js",
    publicPath: "/dist",
  },
  devServer: {
    devMiddleware: { publicPath: "/dist" }, // webpack 결과물 저장소
    static: { directory: path.resolve(__dirname) }, // 실제 존재하는 정적 파일(.html)들의 경로
    hot: true,
  },
};

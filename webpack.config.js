const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

// 애플리케이션의 root 디렉토리의 경로를 절대 경로로 나타냄
const appDirectory = path.resolve(__dirname);

// Webpack이 번들링한 결과물인 CSS나 JavaScript 파일들을 자동으로 <link>나 <script> 태그로 삽입함
const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
  template: path.resolve(__dirname, './public/index.html'),
  filename: 'index.html',
  inject: 'body',
});

module.exports = {
  entry: path.join(appDirectory, 'index.web.js'),
  output: {
    filename: 'bundle.js', // 번들링이 된 파일의 이름
    path: path.join(appDirectory, '/dist'), // 번들링이 된 파일이 생성될 경로
  },
  plugins: [HTMLWebpackPluginConfig],
  devServer: {
    open: true, // 개발 서버를 실행할 때 자동으로 브라우저를 열지 여부를 설정
    historyApiFallback: true, // SPA(Single Page Application)에서 브라우저의 History API를 사용하기 위함
    hot: true, // 코드 변경 시 페이지 새로고침 없이 모듈을 실시간으로 교체할지 여부
  },
};

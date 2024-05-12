const path = require('path');

module.exports = {
  entry: 'src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    contentBase: './public',
    port: 8080,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader', // atau loader lainnya yang diperlukan
      },
      // tambahkan rule untuk file CSS, jika diperlukan
    ],
  },
};
module.exports = {
    mode: 'development', // atau 'production'
    // konfigurasi lainnya
  };
  
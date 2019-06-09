const HtmlWebPackPlugin = require("html-webpack-plugin");
module.exports = {

    entry: {
        
       Redux:'./src/widget/Redux/index.js',
       ScratchProject: './src/widget/ScratchProject/index.js',
      },
      output: {
        filename: '[name].js',
        path: __dirname + '/dist'
      },
    module: {
      rules: [
          //For every file with a js or jsx extension 
          // Webpack pipes the code through babel-loader for transforming ES6 down to ES5.
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: "html-loader"
            }
          ]
        }
      ]
    }
    ,
    devServer: {
        port: 3000
    },
   
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html"
    })
  ]
  };
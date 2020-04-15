const path = require('path');
module.exports = {
  entry: './src/index.js',
  // -----------------------------------------------------
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
 // -----------------------------------------------------
  // Toggle between Development and Production
  mode: 'production',
 // -----------------------------------------------------
  module: {
    rules: [
      {
        // regex for JSX
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
         options: {
            // ensure the "@" is present
           presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
  // -----------------------------------------------------
      // npm install node-sass
      // NOTE: Order matters:
        // npm install style-loader
        // npm install css-loader
        // npm install sass-loader
        {
          test: /.(css|scss)$/,
          // exclude: /node_modules/,
          // use: ['style-loader', 'css-loader', 'sass-loader'],
          use: [
            {
              loader: "style-loader", // inject CSS to page
            },
            {
              loader: "css-loader", // translates CSS into CommonJS modules
            },
            {
              loader: "postcss-loader", // Run post css actions
              options: {
                plugins: function () {
                  // post css plugins, can be exported to postcss.config.js
                  return [require("precss"), require("autoprefixer")];
                },
              },
            },
            // {
            //   loader: "sass-loader", // compiles Sass to CSS
            // },
          ],
        },
    ],
  },
 // -----------------------------------------------------
  devServer: {
    // public path matches what was defined above
      // output: path: 'build'
    publicPath: '/build/',
    // IF: index.html is in ./client, uncomment below ---
    // contentBase: './client',
    proxy: [
      {
        context: ['/'],
        target: 'http://localhost:3000'
    }
  ]
  },
  // -----------------------------------------------------
};


// npm installs ------------------------------------------
/*
npm install -D babel-loader @babel/core @babel/preset-env @babel/preset-react
npm install style-loader
npm install css-loader
npm install sass-loader
*/
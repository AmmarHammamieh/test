const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const PrerendererWebpackPlugin = require('@prerenderer/webpack-plugin');

module.exports = {
  entry: "./src/index.js", // Main entry point
  output: {
    path: path.resolve(__dirname, "dist"), // Output directory
    filename: "[name].bundle.js", // Output filename
    publicPath: "/", // Required for React Router
    clean: true, // Clean output directory before each build
    
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Transpile JavaScript and JSX files
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/, // CSS support
        use: [
          "style-loader",
          "css-loader",
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|eot|ttf|otf)$/, // Handle assets
        type: "asset/resource",
      },
      {
        test: /\.html$/, // HTML files (e.g., for templates)
        use: ["html-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"], // Resolve these file types
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html", // Base HTML template
      favicon: "./public/favicon.ico", // Optional favicon
      inject: true, // Automatically injects scripts
    }),
    new webpack.HotModuleReplacementPlugin(), // HMR in development
    new PrerendererWebpackPlugin({
      // List of routes to prerender
      routes: ['/', '/test', '/blog/:id'],
      rendererOptions: {
        timeout: 30000, // Increase timeout to 30 seconds
        maxConcurrentRoutes: 3
      },
      postProcess: function (context) {
        var titles = {
          '/': 'title',
          '/test': 'About Us',
        };
        context.html = context.html.replace(
          /<title>[^<]*<\/title>/i,
          `<title>${titles[context.route] || 'React App'}</title>`
        );
      },
    }),
  ],
  devServer: {
    static: path.resolve(__dirname, "dist"),
    historyApiFallback: true, // For React Router
    open: true, // Automatically opens the browser
    hot: true, // Enable HMR
    port: 3000, // Dev server port
  },
  optimization: {
    splitChunks: {
      chunks: "all", // Code splitting
    },
  },
};

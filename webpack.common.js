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
      routes: ['/', '/test'],
      postProcess: function (context) {
        const metaData = {
          '/': {
            title: 'Home - My React App',
            description: 'Welcome to the homepage of my React app Home.',
            keywords: 'home, react, app',
            ogImage: 'https://lumytic.com/0edef19e15749b06fedf.webp',
          },
          '/test': {
            title: 'test - My React App',
            description: 'Read our latest test posts.',
            keywords: 'test, posts, react',
            ogImage: 'https://lumytic.com/0edef19e15749b06fedf.webp',
          },
        };
    
        const routeData = metaData[context.route] || {};
        const metaTags = `
          <title>${routeData.title || 'Default Title'}</title>
          <meta name="description" content="${routeData.description || 'Default description'}">
          <meta name="keywords" content="${routeData.keywords || 'default, keywords'}">
          <meta property="og:image" content="${routeData.ogImage || 'https://lumytic.com/default-image.webp'}">
          <meta property="og:image:width" content="1200">
          <meta property="og:image:height" content="630">
        `;
        context.html = context.html.replace(/<head>/i, `<head>${metaTags}`);
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

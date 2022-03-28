# Step by Step to Config the React and Webpack

## Step
1. Initialisation the Project
`$ npm init`
2. Install the `Webpack`
`$ npm i webpack webpack-cli --save-dev` -D
3. Add the `src/` folder and also create an `index.js` file inside it.
`$ mkdir src && touch src/index.js src/index.html`
4. Update the `package.json` on the `scripts` sections:
```json
...
"scripts": {
  "dev": "webpack --mode development",
  "build": "webpack --mode production"
}
...
```
5. Test the Application
`$ npm run start`
6. Add [React](https://reactjs.org)
`$ npm install react react-dom --save`
7. Then install `babel-core`, `babel-loader`, `babel-preset-env`, and `babel-preset-react` as dev dependencies:
`$ npm i babel-loader @babel/core @babel/preset-env @babel/preset-react @babel/cli --save-dev`
8. Now we need to create and configure our **webpack.config.js**:
```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};
```
9. Need to add `.babelrc` to run babel-loader
`$ touch .babelrc`
10. Now add the following code to `.babelrc`:
```
{
  "presets": ["@babel/preset-env", "@babel/preset-react"]
}
```
11. Add this following code to your `index.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>React, Webpack and TailwindCSS</title>
</head>
<body>
  <section id="go"></section>
</body>
</html>
```
12. Now we need to install html-webpack-plugin and use this in our webpack config file. It will generate an HTML file for your application, or you can provide a template. It also minifies the file.
`$ npm i html-webpack-plugin --save-dev`
13. Update the `webpack.config.js` just like this:
```js
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
    template: "./src/index.html",
    filename: "./index.html"
  });
]
};
```
14. Install the Webpack Dev Server
`$ npm i webpack-dev-server --save-dev`
15. And also update your `scripts` on the `package.json` file like this:
```json
 "scripts": {
    "start": "webpack-dev-server --mode development",
    "build": "webpack --mode production"
  },
```
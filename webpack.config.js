/* eslint-disable linebreak-style */
const path = require('path');

module.exports = {
  mode: 'production', // could be "production" development as well
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
  },
};

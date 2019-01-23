'use strict'
const { resolve } = require('path')
const app = resolve(__dirname, '../src/app.js')
const routing = resolve(__dirname, '../src/routing.js')
const path = resolve(__dirname, '../public/js/')
const filename = '[name].js'
const rules = []
module.exports = {
  entry: {
    app,
    // routing,
  },
  output: {
    path,
    filename,
  },
  module: {
    rules,
  }
}
console.log(module.exports)

var merge = require('webpack-merge')
var mockEnv = require('./mock.env')

module.exports = merge(mockEnv, {
  NODE_ENV: '"development"'
})

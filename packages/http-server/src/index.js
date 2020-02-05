/* eslint global-require: 0 */

require('@babel/register')({
  ignore: [/(node_modules)/],
  extensions: ['.js', '.jsx'],
})

require('./server')

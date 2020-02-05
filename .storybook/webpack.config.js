const path = require('path')
const DotEnvPlugin = require('dotenv-webpack')

module.exports = ({ config, mode }) => {
  if (mode !== 'DEVELOPMENT') {
    config.plugins = config.plugins.filter(plugin => plugin.constructor.name !== 'UglifyJsPlugin')
  }

  const rules = config.module.rules
  const plugins = config.plugins

  rules.push({
    test: /\.scss$/,
    use: [
      {
        loader: 'style-loader',
      },
      {
        loader: 'css-loader',
        options: {
          importLoaders: 2,
          sourceMap: true,
          modules: {
            localIdentName: '[name]_[local]_[hash:base64:5]',
          },
        },
      },
      {
        loader: 'resolve-url-loader',
      },
      {
        loader: 'sass-loader',
      },
      {
        loader: 'postcss-loader',
        options: {
          sourceMap: true,
          plugins: () => [require('postcss-cssnext')(), require('postcss-preset-env')()],
          parser: 'postcss-scss',
        },
      },
    ],
  })

  plugins.push(
    new DotEnvPlugin({
      path: path.resolve(__dirname, '../packages/client/.env.develop'),
    }),
  )

  return config
}

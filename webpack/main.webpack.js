module.exports = {
  resolve: {
    extensions: ['.ts', '.js']
  },
  entry: ['./electron/main.ts', './electron/screens/timer.ts'],
  module: {
    rules: require('./rules.webpack'),
  }
}
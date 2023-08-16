module.exports = {
  mode: 'production',
  entry: './foo.js',
  output: {
    library: {
      name: 'teambit.vite/my-component',
      type: 'umd',
    },
    filename: 'foo_webpack.js',
  },
}
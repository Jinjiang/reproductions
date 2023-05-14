import commonjs from 'vite-plugin-commonjs'

export default {
  plugins: [
    commonjs({
      filter(id) {
        if (id.includes('node_modules')) {
          return true
        }
      }
    })
  ]
}

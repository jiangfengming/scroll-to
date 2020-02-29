import babel from 'rollup-plugin-babel'

export default {
  input: 'src/index.js',

  output: {
    format: 'esm',
    file: 'dist/scroll-to.js'
  },

  plugins: [
    babel()
  ],

  external: ['create-transition']
}

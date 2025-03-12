import typescript from 'rollup-plugin-typescript2'

const INPUT_ENTRY = 'src/index.ts'

export default {
  input: INPUT_ENTRY,
  external: ['tailwindcss/plugin'],
  output: [
    // cjs
    {
      file: 'dist/index.cjs.js', format: 'cjs',
    },
    // ES
    {
      file: 'dist/index.esm.js', format: 'es',
    },
    // UMD
    {
      file: 'dist/index.umd.min.js',
      format: 'umd',
      name: 'tailwind-button-plugin',
      indent: false,
    }
  ],
  plugins: [
    typescript()
  ],
}



import vue from 'rollup-plugin-vue';
import resolve from 'rollup-plugin-node-resolve';
import { eslint } from 'rollup-plugin-eslint';
import terser from '@rollup/plugin-terser';

export default {
  plugins: [
    vue(),
    resolve({
      extensions: ['.vue', '.js'],
    }),
    terser(),
    // eslint()
  ],
  input: './packages/index.js',
  output: [
    {
      name: 'dymaticui',
      file: './dist/dynamic-ui.umd.js',
      format: 'umd',
      sourcemap: false,
      globals: {
        vue: 'vue',
        ElementUI: 'element-ui',
      },
    },
    {
      name: 'dymaticui',
      file: './dist/dynamic-ui.es.js',
      format: 'es',
      sourcemap: false,
      globals: {
        vue: 'vue',
        ElementUI: 'element-ui',
      },
    },
  ],
};

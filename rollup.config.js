import babel from 'rollup-plugin-babel';
import { name } from './package.json';

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/index.js',
    format: 'umd',
    name,
  },
  plugins: [
    babel(),
  ],
};

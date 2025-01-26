// rollup.config.js
import typescript from '@rollup/plugin-typescript';
import babel from '@rollup/plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import dts from 'rollup-plugin-dts';

const extensions = ['.js', '.jsx', '.ts', '.tsx'];

const commonConfig = ({declarationDir}) => ({
  input: 'src/index.ts',
  external: ['react', 'react-dom'],
  plugins: [
    nodeResolve({ extensions }),
    commonjs(),
    typescript({
      tsconfig: './tsconfig.json',
      declaration: true,
      declarationDir: declarationDir || "./types",
    }),
    babel({
      extensions,
      babelHelpers: 'bundled',
      include: ['src/**/*'],
    }),
  ],
});

export default [
  {
    ...commonConfig({ declarationDir: './es/types' }),
    output: {
      dir: 'es',
      format: 'esm',
      preserveModules: true,
      preserveModulesRoot: 'src',
    },
  },
  {
    ...commonConfig({ declarationDir: './lib/types' }),
    output: {
      dir: 'lib',
      format: 'cjs',
      preserveModules: true,
      preserveModulesRoot: 'src',
    },
  }
];

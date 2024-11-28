import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';
import webpack from 'webpack';

const __dirname = dirname(fileURLToPath(import.meta.url));

const root = resolve(__dirname, '../');
const define = {
  // 'process.env.NODE_ENV': JSON.stringify('production'),
};

const config = {
  mode: 'development',
  entry: {
    main: resolve(root, './main.ts')
  },
  output: {
    path: resolve(root, 'dist'),
    library: {
      type: 'umd',
      name: 'main',
    },
    filename: 'main.umd.webpack.cjs',
  },
  devtool: 'source-map',
  externals: {
    react: 'React',
    '@emotion/styled': 'EmotionStyled',
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin(define),
  ],
}

console.log(config);

webpack(config, (err, stats) => {
  if (err || stats.hasErrors()) {
    // ...
  }
  console.log({ err, stats });
  console.log(stats.toString());
  // Done processing
});

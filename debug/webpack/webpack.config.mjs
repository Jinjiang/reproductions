import {
  configBaseFactory,
  configBaseDevFactory,
  configEnvDevFactory,
  configComponentDevFactory,
} from '@teambit/react.webpack.react-webpack';
import { WebpackConfigMutator } from '@teambit/webpack.modules.config-mutator';
import { fileURLToPath } from 'url';
import { resolve } from 'path';
import webpack from 'webpack';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
console.log(__dirname);

function createDevServerTransformers(
  context,
  workspace
) {
  console.log({ context, workspace });
  const baseConfig = configBaseFactory(false);
  const baseDevConfig = configBaseDevFactory({
    workspaceDir: workspace.path,
  });
  const envDevConfig = configEnvDevFactory({ envId: context.id });
  const componentDevConfig = configComponentDevFactory({
    envId: context.id,
    // componentPathsRegExps: workspace?.getComponentPathsRegExps() ?? [],
    componentPathsRegExps: [],
  });

  const defaultTransformer = (
    configMutator
  ) => {
    const merged = configMutator.merge([
      baseConfig,
      baseDevConfig,
      envDevConfig,
      componentDevConfig,
    ]);
    return merged;
  };

  return defaultTransformer;
}

const transformer = createDevServerTransformers(
  { id: 'debug' },
  { path: process.cwd() }
)

const config = new WebpackConfigMutator({
  entry: './debug/webpack/main.mjs',
  mode: 'development',
  output: {
    path: resolve(__dirname, 'dist'),
  }
});

console.log(transformer(config).raw);

webpack(transformer(config).raw, (err, stats) => {
  if (err || stats.hasErrors()) {
    console.error(err || stats.toJson().errors);
  } else {
    console.log('Compilation successful');
  }
});
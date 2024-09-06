import {
  configBaseFactory,
  configBaseDevFactory,
  configEnvDevFactory,
  configComponentDevFactory,
} from '@teambit/react.webpack.react-webpack';
import { WebpackConfigMutator } from '@teambit/webpack.modules.config-mutator';

function createDevServerTransformers(
  context,
  workspace
) {
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

const config = new WebpackConfigMutator({});

console.log(transformer(config).raw);

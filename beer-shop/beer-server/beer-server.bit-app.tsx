import { NodeApp } from '@bitdev/node.node-app';

export default NodeApp.from({
  name: 'beer-server',
  mainPath: import.meta.resolve('./beer-server.app-root.js'),
});

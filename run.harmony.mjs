import config from './harmony.config.mjs'
import { generateRoot } from './generate-root.mjs'

Object.keys(config.runtimes).forEach(async (runtimeName) => {
  const rootPath = generateRoot(
    runtimeName,
    // TODO:
    { path: config.platform, name: config.platform, packageName: config.platform }, 
    // TODO:
    config.aspects.map(aspect => ({ path: aspect, name: aspect, packageName: aspect }))
  )

  const context = { root: rootPath }
  const { run } = await import(config.runtimes[runtimeName])
  run(context)
})

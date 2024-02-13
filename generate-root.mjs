import fs from 'fs'

const getAspectRuntime = (aspect, runtimeName) => {
  const runtimePath = `${aspect.path}/${aspect.name}.${runtimeName}.js`
  if (fs.existsSync(runtimePath)) {
    return `${aspect.packageName}/${aspect.name}.${runtimeName}.js`
  }
  return null
}

export const generateRoot = (runtimeName, platformAspect, aspectList) => {
  const platformRuntime = getAspectRuntime(platformAspect, runtimeName)
  const platformTrigger = runtimeName === 'browser' ? 'render' : 'run'
  const platformImport = `import { ${platformTrigger} } from "${platformRuntime}";`
  const aspectImports = aspectList.map(aspect => {
    const aspectRuntime = getAspectRuntime(aspect, runtimeName)
    return `import "${aspectRuntime}";`
  })
  const imports = [platformImport, ...aspectImports].join('\n')
  const rootContent = `${imports}\n\n${platformTrigger}();`
  const rootPath = `root.${runtimeName}.mjs`
  fs.writeFileSync(rootPath, rootContent)
  return rootPath
}

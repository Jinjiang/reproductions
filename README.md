# Harmony notes

## Public APIs

- Harmony (main target)
- Aspect <- AspectManifest!
- Runtime <- RuntimeManifest, RuntimeDefinition

```ts
Harmony.load(
  [aspect1, aspect2, ...],
  'runtime1',
  config { [key]: object },
  depGraphOptions { getName(manifest) => name }
)
Harmony.run(
  [aspect1, aspect2, ...],
  'runtime1',
  config { [key]: object },
  depGraphOptions { getName(manifest) => name }
)

harmony.run((aspect, runtime) => Promise<void>)
```

```ts
Manifest {
  name // only in Extension

  id // in Aspect and Extension
  packageName // in Aspect and Extension

  runtime // only in runtime

  dependencies<Aspect>[] // Manifest[] in Extension
  defaultConfig
  slots[]
  provider
}
```

## Internal APIs

- AspectGraph -> DependencyGraph
- Extension -> DependencyNode

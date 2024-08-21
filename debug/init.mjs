import { writeFileSync } from 'fs';
import { sep, win32 } from 'path';
import { files, formattedFiles } from './data.mjs';

function escaptPath(path) {
  if (sep === win32.sep) {
    return path.replace(/\\/g, '\\\\')
  }
  return path
}

writeFileSync(files.index, `<script type="module" src="${formattedFiles.main}"></script>`)
writeFileSync(files.main, `import p from '${escaptPath(formattedFiles.preview)}'\nimport l from '${escaptPath(formattedFiles.local)}'\n\nconsole.log(p)\nconsole.log(l)`)
writeFileSync(files.local, `import foo from '${escaptPath(formattedFiles.foo)}'\n\nconsole.log(foo)\n\nexport default 'local'`)
writeFileSync(files.preview, `module.exports = 'preview'`)
writeFileSync(files.foo, `module.exports = 'foo'`)

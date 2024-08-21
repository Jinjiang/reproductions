import { writeFileSync } from 'fs';
import { files } from './data.mjs';

writeFileSync(files.index, `<script type="module" src="${files.main}"></script>`)
writeFileSync(files.main, `import p from '${files.preview}'\nimport l from '${files.local}'\n\nconsole.log(p)\nconsole.log(l)`)
writeFileSync(files.local, `import foo from '${files.foo}'\n\nconsole.log(foo)\n\nexport default 'local'`)
writeFileSync(files.preview, `module.exports = 'preview'`)
writeFileSync(files.foo, `module.exports = 'foo'`)

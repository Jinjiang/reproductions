# Issue: Vite x Windows x Absolute Paths x alias to node_modules packages

How to reproduce:

```bash
# 0. it's only on Windows

# 1. install
pnpm install

# 2. edit the absolute paths in `main.mjs` and `vite.config.ts` according to your current directory

# 3. run
pnpm dev
```

Then you will find:

```js
// it works
import './app.mjs?1';
// it works
import '/C:/Users/zhaoj/code/reproductions/app.mjs?2';
// it works
import '/@fs/C:/Users/zhaoj/code/reproductions/app.mjs?3';
// it works
import 'C:\\Users\\zhaoj\\code\\reproductions\\app.mjs?4';
// it works
import '/@fs/C:\\Users\\zhaoj\\code\\reproductions\\app.mjs?5';

// it works
import foo1 from 'foo/foo.cjs';

// it works
import foo2 from '/C:/Users/zhaoj/code/reproductions/node_modules/foo/foo.cjs';
// it works
import foo3 from '/@fs/C:/Users/zhaoj/code/reproductions/node_modules/foo/foo.cjs';

// it doesn't
import foo4 from 'C:\\Users\\zhaoj\\code\\reproductions\\node_modules\\foo\\foo.cjs';
// it doesn't
import foo5 from '/@fs/C:\\Users\\zhaoj\\code\\reproductions\\node_modules\\foo\\foo.cjs';
```

Error log:

```bash
Uncaught SyntaxError: The requested module '/node_modules/foo/foo.cjs?import&v=ede2c958' does not provide an export named 'default'
```

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

console.log({
  foo1,
  foo2,
  foo3,
  foo4,
  foo5,
})
# README

This repo is for debugging vite dev server on Bit.

## Steps to reproduce

```bash
bit install
pnpm dev
```

## Picked from Vite ecosystem

- `vite` v4.1.0
- `vite-plugin-node-polyfills` v0.9.0
  - `node-stdlib-browser` v1.2.0
- `@vitejs/plugin-react` v4.0.0
  - `react` v17.x
  - `react-dom` v17.x
- `vite-plugin-mdx` v3.5.11
  - `@mdx-js/react` v1.6.22

## By far the known issues

1. `@teambit/vue.vue/dist/preview/docs.js` (doesn't work)
2. `render()` (haven't tried yet)

<details>

<summary>Browser error log:</summary>

```
parser.mjs:1515  Uncaught TypeError: (0 , import_defineToJSON2.default) is not a function
    at node_modules/.pnpm/graphql@14.7.0/node_modules/graphql/language/parser.mjs (parser.mjs:1515:1)
    at __init (chunk-DPPTHLXE.js?v=9add81a4:15:56)
    at node_modules/.pnpm/graphql-request@4.3.0_graphql@14.7.0/node_modules/graphql-request/dist/index.js (index.ts:4:1)
    at __require2 (chunk-DPPTHLXE.js?v=9add81a4:18:50)
    at node_modules/.pnpm/@teambit+graphql.hooks.use-query-light@1.0.0_graphql@14.7.0_react-dom@18.2.0_react@18.2.0/node_modules/@teambit/graphql.hooks.use-query-light/dist/use-query-light.js (use-query-light.ts:2:1)
    at __require2 (chunk-DPPTHLXE.js?v=9add81a4:18:50)
    at node_modules/.pnpm/@teambit+graphql.hooks.use-query-light@1.0.0_graphql@14.7.0_react-dom@18.2.0_react@18.2.0/node_modules/@teambit/graphql.hooks.use-query-light/dist/index.js (index.ts:1:1)
    at __require2 (chunk-DPPTHLXE.js?v=9add81a4:18:50)
    at node_modules/.pnpm/@teambit+component.ui.hooks.use-fetch-docs@0.0.16_graphql@14.7.0_react-dom@18.2.0_react@18.2.0/node_modules/@teambit/component.ui.hooks.use-fetch-docs/dist/use-fetch-docs.js (use-fetch-docs.tsx:2:1)
    at __require2 (chunk-DPPTHLXE.js?v=9add81a4:18:50)
```

</details>

<details>

<summary>Terminal error log:</summary>

```
C:/Users/zhaoj/code/debug-vite-dev-server-2/node_modules/.vite/deps/@teambit_vue__vue_dist_preview_docs__js.js
82001|    default: () => default60
82002|  });
82003|  import { default as default60 } from "C:/Users/zhaoj/AppData/Local/.bvm/versions/0.1.60/bit-0.1.60/node_modules/tippy.js/dist/tippy.css";
   |                                        ^
82004|  import * as tippy_star from "C:/Users/zhaoj/AppData/Local/.bvm/versions/0.1.60/bit-0.1.60/node_modules/tippy.js/dist/tippy.css";
82005|  var init_tippy = __esm({
Default and named imports from CSS files are deprecated. Use the ?inline query instead. For example: import { default as default60 } from "C:/Users/zhaoj/AppData/Local/.bvm/versions/0.1.60/bit-0.1.60/node_modules/tippy.js/dist/tippy.css?inline"
  Plugin: vite:import-analysis
  File: C:/Users/zhaoj/code/debug-vite-dev-server-2/node_modules/.vite/deps/@teambit_vue__vue_dist_preview_docs__js.js?v=9add81a4
5:26:06 PM [vite] warning:
C:/Users/zhaoj/code/debug-vite-dev-server-2/node_modules/.vite/deps/@teambit_vue__vue_dist_preview_docs__js.js     
82002|  });
82003|  import { default as default60 } from "C:/Users/zhaoj/AppData/Local/.bvm/versions/0.1.60/bit-0.1.60/node_modules/tippy.js/dist/tippy.css";
82004|  import * as tippy_star from "C:/Users/zhaoj/AppData/Local/.bvm/versions/0.1.60/bit-0.1.60/node_modules/tippy.js/dist/tippy.css";
   |                               ^
82005|  var init_tippy = __esm({
82006|    "vite:dep-pre-bundle:external-conversion:C:/Users/zhaoj/AppData/Local/.bvm/versions/0.1.60/bit-0.1.60/node_modules/tippy.js/dist/tippy.css"() {
Default and named imports from CSS files are deprecated. Use the ?inline query instead. For example: import * as tippy_star from "C:/Users/zhaoj/AppData/Local/.bvm/versions/0.1.60/bit-0.1.60/node_modules/tippy.js/dist/tippy.css?inline"
  Plugin: vite:import-analysis
  File: C:/Users/zhaoj/code/debug-vite-dev-server-2/node_modules/.vite/deps/@teambit_vue__vue_dist_preview_docs__js.js?v=9add81a4
5:26:06 PM [vite] warning:
C:/Users/zhaoj/code/debug-vite-dev-server-2/node_modules/.vite/deps/@teambit_vue__vue_dist_preview_docs__js.js     
82015|    default: () => default61
82016|  });
82017|  import { default as default61 } from "C:/Users/zhaoj/AppData/Local/.bvm/versions/0.1.60/bit-0.1.60/node_modules/tippy.js/dist/svg-arrow.css";
   |                                        ^
82018|  import * as svg_arrow_star from "C:/Users/zhaoj/AppData/Local/.bvm/versions/0.1.60/bit-0.1.60/node_modules/tippy.js/dist/svg-arrow.css";
82019|  var init_svg_arrow = __esm({
Default and named imports from CSS files are deprecated. Use the ?inline query instead. For example: import { default as default61 } from "C:/Users/zhaoj/AppData/Local/.bvm/versions/0.1.60/bit-0.1.60/node_modules/tippy.js/dist/svg-arrow.css?inline"
  Plugin: vite:import-analysis
  File: C:/Users/zhaoj/code/debug-vite-dev-server-2/node_modules/.vite/deps/@teambit_vue__vue_dist_preview_docs__js.js?v=9add81a4
5:26:06 PM [vite] warning:
C:/Users/zhaoj/code/debug-vite-dev-server-2/node_modules/.vite/deps/@teambit_vue__vue_dist_preview_docs__js.js     
82016|  });
82017|  import { default as default61 } from "C:/Users/zhaoj/AppData/Local/.bvm/versions/0.1.60/bit-0.1.60/node_modules/tippy.js/dist/svg-arrow.css";
82018|  import * as svg_arrow_star from "C:/Users/zhaoj/AppData/Local/.bvm/versions/0.1.60/bit-0.1.60/node_modules/tippy.js/dist/svg-arrow.css";
   |                                   ^
82019|  var init_svg_arrow = __esm({
82020|    "vite:dep-pre-bundle:external-conversion:C:/Users/zhaoj/AppData/Local/.bvm/versions/0.1.60/bit-0.1.60/node_modules/tippy.js/dist/svg-arrow.css"() {
Default and named imports from CSS files are deprecated. Use the ?inline query instead. For example: import * as svg_arrow_star from "C:/Users/zhaoj/AppData/Local/.bvm/versions/0.1.60/bit-0.1.60/node_modules/tippy.js/dist/svg-arrow.css?inline"
  Plugin: vite:import-analysis
  File: C:/Users/zhaoj/code/debug-vite-dev-server-2/node_modules/.vite/deps/@teambit_vue__vue_dist_preview_docs__js.js?v=9add81a4
5:26:08 PM [vite] warning:
C:/Users/zhaoj/code/debug-vite-dev-server-2/node_modules/.vite/deps/@teambit_vue__vue_dist_preview_docs__js.js     
130237|    default: () => default122
130238|  });
130239|  import { default as default122 } from "C:/Users/zhaoj/AppData/Local/.bvm/versions/0.1.60/bit-0.1.60/node_modules/@teambit/mdx.ui.mdx-layout/dist/mdx-layout.css";
   |                                         ^
130240|  import * as mdx_layout_star from "C:/Users/zhaoj/AppData/Local/.bvm/versions/0.1.60/bit-0.1.60/node_modules/@teambit/mdx.ui.mdx-layout/dist/mdx-layout.css";
130241|  var init_mdx_layout = __esm({
Default and named imports from CSS files are deprecated. Use the ?inline query instead. For example: import { default as default122 } from "C:/Users/zhaoj/AppData/Local/.bvm/versions/0.1.60/bit-0.1.60/node_modules/@teambit/mdx.ui.mdx-layout/dist/mdx-layout.css?inline"
  Plugin: vite:import-analysis
  File: C:/Users/zhaoj/code/debug-vite-dev-server-2/node_modules/.vite/deps/@teambit_vue__vue_dist_preview_docs__js.js?v=9add81a4
5:26:08 PM [vite] warning:
C:/Users/zhaoj/code/debug-vite-dev-server-2/node_modules/.vite/deps/@teambit_vue__vue_dist_preview_docs__js.js     
130238|  });
130239|  import { default as default122 } from "C:/Users/zhaoj/AppData/Local/.bvm/versions/0.1.60/bit-0.1.60/node_modules/@teambit/mdx.ui.mdx-layout/dist/mdx-layout.css";
130240|  import * as mdx_layout_star from "C:/Users/zhaoj/AppData/Local/.bvm/versions/0.1.60/bit-0.1.60/node_modules/@teambit/mdx.ui.mdx-layout/dist/mdx-layout.css";
   |                                    ^
130241|  var init_mdx_layout = __esm({
130242|    "vite:dep-pre-bundle:external-conversion:C:/Users/zhaoj/AppData/Local/.bvm/versions/0.1.60/bit-0.1.60/node_modules/@teambit/mdx.ui.mdx-layout/dist/mdx-layout.css"() {
Default and named imports from CSS files are deprecated. Use the ?inline query instead. For example: import * as mdx_layout_star from "C:/Users/zhaoj/AppData/Local/.bvm/versions/0.1.60/bit-0.1.60/node_modules/@teambit/mdx.ui.mdx-layout/dist/mdx-layout.css?inline"
  Plugin: vite:import-analysis
  File: C:/Users/zhaoj/code/debug-vite-dev-server-2/node_modules/.vite/deps/@teambit_vue__vue_dist_preview_docs__js.js?v=9add81a4
5:26:09 PM [vite] warning:
C:/Users/zhaoj/code/debug-vite-dev-server-2/node_modules/.vite/deps/@teambit_vue__vue_dist_preview_docs__js.js     
234584|    default: () => default213
234585|  });
234586|  import { default as default213 } from "C:/Users/zhaoj/code/debug-vite-dev-server-2/node_modules/.pnpm/@teambit+mdx.ui.mdx-layout@0.0.513_react-dom@18.2.0_react@18.2.0_typescript@4.9.5/node_modules/@teambit/mdx.ui.mdx-layout/dist/mdx-layout.css";
   |                                         ^
234587|  import * as mdx_layout_star2 from "C:/Users/zhaoj/code/debug-vite-dev-server-2/node_modules/.pnpm/@teambit+mdx.ui.mdx-layout@0.0.513_react-dom@18.2.0_react@18.2.0_typescript@4.9.5/node_modules/@teambit/mdx.ui.mdx-layout/dist/mdx-layout.css";
234588|  var init_mdx_layout2 = __esm({
Default and named imports from CSS files are deprecated. Use the ?inline query instead. For example: import { default as default213 } from "C:/Users/zhaoj/code/debug-vite-dev-server-2/node_modules/.pnpm/@teambit+mdx.ui.mdx-layout@0.0.513_react-dom@18.2.0_react@18.2.0_typescript@4.9.5/node_modules/@teambit/mdx.ui.mdx-layout/dist/mdx-layout.css?inline"
  Plugin: vite:import-analysis
  File: C:/Users/zhaoj/code/debug-vite-dev-server-2/node_modules/.vite/deps/@teambit_vue__vue_dist_preview_docs__js.js?v=9add81a4
5:26:10 PM [vite] warning:
C:/Users/zhaoj/code/debug-vite-dev-server-2/node_modules/.vite/deps/@teambit_vue__vue_dist_preview_docs__js.js     
234585|  });
234586|  import { default as default213 } from "C:/Users/zhaoj/code/debug-vite-dev-server-2/node_modules/.pnpm/@teambit+mdx.ui.mdx-layout@0.0.513_react-dom@18.2.0_react@18.2.0_typescript@4.9.5/node_modules/@teambit/mdx.ui.mdx-layout/dist/mdx-layout.css";
234587|  import * as mdx_layout_star2 from "C:/Users/zhaoj/code/debug-vite-dev-server-2/node_modules/.pnpm/@teambit+mdx.ui.mdx-layout@0.0.513_react-dom@18.2.0_react@18.2.0_typescript@4.9.5/node_modules/@teambit/mdx.ui.mdx-layout/dist/mdx-layout.css";
   |                                     ^
234588|  var init_mdx_layout2 = __esm({
234589|    "vite:dep-pre-bundle:external-conversion:C:/Users/zhaoj/code/debug-vite-dev-server-2/node_modules/.pnpm/@teambit+mdx.ui.mdx-layout@0.0.513_react-dom@18.2.0_react@18.2.0_typescript@4.9.5/node_modules/@teambit/mdx.ui.mdx-layout/dist/mdx-layout.css"() {
Default and named imports from CSS files are deprecated. Use the ?inline query instead. For example: import * as mdx_layout_star2 from "C:/Users/zhaoj/code/debug-vite-dev-server-2/node_modules/.pnpm/@teambit+mdx.ui.mdx-layout@0.0.513_react-dom@18.2.0_react@18.2.0_typescript@4.9.5/node_modules/@teambit/mdx.ui.mdx-layout/dist/mdx-layout.css?inline"
  Plugin: vite:import-analysis
  File: C:/Users/zhaoj/code/debug-vite-dev-server-2/node_modules/.vite/deps/@teambit_vue__vue_dist_preview_docs__js.js?v=9add81a4
```

</details>

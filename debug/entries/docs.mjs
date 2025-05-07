import { jsxDEV } from "react/jsx-dev-runtime.js";
import { useMDXComponents } from "@mdx-js/react";
import { MDXScopeProvider } from "bar";

export default () => {
  console.log({
    useMDXComponents,
    MDXScopeProvider,
    jsxDEV,
  })
}

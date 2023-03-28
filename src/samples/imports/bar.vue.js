import Foo from "./foo.vue.js"
const __sfc__ = {
  components: {
    Foo
  }
}

import { resolveComponent as _resolveComponent, createVNode as _createVNode, createTextVNode as _createTextVNode, Fragment as _Fragment, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue"
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Foo = _resolveComponent("Foo")

  return (_openBlock(), _createElementBlock(_Fragment, null, [
    _createTextVNode(" 1"),
    _createVNode(_component_Foo),
    _createTextVNode("2 ")
  ], 64 /* STABLE_FRAGMENT */))
}
__sfc__.render = render

__sfc__.__file = "bar.vue"
export default __sfc__
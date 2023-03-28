import './foo.vue.css';import __sfc__ from "./external.js"
import { toDisplayString as _toDisplayString, createElementVNode as _createElementVNode, vModelText as _vModelText, withDirectives as _withDirectives, Fragment as _Fragment, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue"
function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock(_Fragment, null, [
    _createElementVNode("h1", null, _toDisplayString(_ctx.msg), 1 /* TEXT */),
    _withDirectives(_createElementVNode("input", {
      "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => ((_ctx.msg) = $event))
    }, null, 512 /* NEED_PATCH */), [
      [_vModelText, _ctx.msg]
    ])
  ], 64 /* STABLE_FRAGMENT */))
}
__sfc__.render = render

__sfc__.__file = "foo.vue"
export default __sfc__
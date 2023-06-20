

const __sfc__ = {
  data() {
    return {
      msg: 'Hello from Component A!',
    }
  },
  methods: {
    someMethod(arg) {
      return 'hello ' + arg
    },
  },
}

import { toDisplayString as _toDisplayString, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue"

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (_openBlock(), _createElementBlock("h1", null, _toDisplayString($data.msg), 1 /* TEXT */))
}
__sfc__.render = render

__sfc__.__file = "ts.vue"
__sfc__.__file = "ts.vue"
export default __sfc__

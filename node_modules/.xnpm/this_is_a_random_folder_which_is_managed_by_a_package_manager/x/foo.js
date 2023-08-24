"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vue_1 = require("vue");
const vueMounter = (Comp) => {
    const root = document.getElementById('root');
    if (!root) {
        throw new Error('No root element found');
    }
    if (root.__vue_app__) {
        root.__vue_app__.unmount();
    }
    (0, vue_1.createApp)(Comp).mount('#root');
};
exports.default = vueMounter;

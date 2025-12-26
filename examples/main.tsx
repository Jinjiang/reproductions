import { createApp } from 'vue';
import { createRoot } from 'react-dom/client';
import ReactApp from './react-app';
import VueApp from './vue-app.vue';

document.getElementById('app')!.innerHTML = `
  <div id="react-app"></div>
  <div id="vue-app"></div>
`;

const reactRoot = createRoot(document.getElementById('react-app')!);
reactRoot.render(<ReactApp />);

const vueApp = createApp(VueApp);
vueApp.mount('#vue-app');

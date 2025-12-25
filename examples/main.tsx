import { createApp } from 'vue';
import MyVueComponent from '../src/MyVueComponent.vue';
import MyReactExamples from './MyReactExamples';
import { createRoot } from 'react-dom/client';

// Mount Vue component
const vueApp = createApp({
  components: { MyVueComponent },
  template: `
    <div class="button-group">
      <MyVueComponent label="Primary Button" variant="primary" />
      <MyVueComponent label="Secondary Button" variant="secondary" />
      <MyVueComponent label="Disabled Button" variant="primary" :disabled="true" />
    </div>
  `,
});

vueApp.mount('#vue-app');

// Mount React component
const reactRoot = createRoot(document.getElementById('react-app')!);
reactRoot.render(<MyReactExamples />);

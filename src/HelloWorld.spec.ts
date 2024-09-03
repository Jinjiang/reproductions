import { render, screen } from '@testing-library/vue'
import Component from './HelloWorld.vue'

test('properly handles v-model', () => {
  render(Component)
  screen.getByText('Hello, World!')
})

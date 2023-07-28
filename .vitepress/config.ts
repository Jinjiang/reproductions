import { HeadConfig, defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Test Title',
  description: 'Test description',
  async transformHead(context): Promise<HeadConfig[]> {
    context
    return [
      ['meta', { name: 'description', content: 'Custom description' }],
    ]
  },
})

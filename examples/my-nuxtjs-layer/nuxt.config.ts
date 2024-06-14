export default defineNuxtConfig({
  // Extending from base nuxt.config.ts!
  app: {
    head: {
      title: 'Extending Configs is Fun!',
      meta: [
        { name: 'description', content: 'I am using the extends feature in nuxt 3!' }
      ],
    }
  }
})

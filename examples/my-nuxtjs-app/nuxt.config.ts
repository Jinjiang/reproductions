export default defineNuxtConfig({
  devtools: { enabled: true },
  extends: [
    '../my-nuxtjs-layer'
  ],
  modules: [
    '@nuxt/test-utils/module'
  ]
})

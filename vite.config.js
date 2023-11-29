export default {
  define: {
    __APP_ENV__: JSON.stringify({
      VITE_TEST: process.env.VITE_TEST
    })
  }
}
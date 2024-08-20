try {
  import('foo')
} catch (e) {
  console.log('Can I catch this error?')
  console.error(e)
}
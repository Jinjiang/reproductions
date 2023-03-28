
export default {
  data() {
    return {
      msg: 'Hello from Component A!',
    }
  },
  methods: {
    someMethod(arg: string): string {
      return 'hello ' + arg
    },
  },
}

import { DefaultReporter } from 'vitest/reporters'

export default class MyReporter extends DefaultReporter {
  onCollected() {
    // console.log('onCollected')
  }
  onFinished(files, errors) {
    // console.log('onFinished', { files, errors })
    this.results = { files, errors }
  }
}

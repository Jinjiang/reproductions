// @vitest-environment nuxt
import { it, expect } from 'vitest'
import { renderSuspended } from '@nuxt/test-utils/runtime'
import App from '../app.vue';

it('can also render an app', async () => {
  const component = await renderSuspended(App, { route: '/about' })
  expect(component.html()).toMatchInlineSnapshot(`
    "<div id="test-wrapper">
      <div>
        <div> 123 <div>
            <h1>Hello World</h1>
          </div><!-- <NuxtWelcome /> -->
          <div>
            <h1>Hello World</h1>
          </div>
          <div>
            <h1>About</h1>
            <div>
              <h1>Hello World</h1>
            </div><img src="/favicon.ico"><img src="/assets/zhlint.svg"><img src="/vue.svg" style="width: 200px;">
            <div> Counter: 3000 <button> + </button><button> - </button></div>
            <p></p>
          </div>
        </div>
      </div>
    </div>"
  `)
})

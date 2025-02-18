
import { Harmony, Slot } from '@bitdev/harmony.harmony';
import harmonyExamplesPeopleAspect from '@bitdev/harmony.examples.people/dist/people.aspect.js';
import harmonyRuntimesBrowserRuntimeAspect from '@bitdev/harmony.runtimes.browser-runtime/dist/browser-runtime.aspect.js';
import harmonyAspectsPlatformAspectAspect from '@bitdev/harmony.aspects.platform-aspect/dist/platform-aspect.aspect.js';
import harmonyExamplesPeopleRuntime from '@bitdev/harmony.examples.people/dist/people.browser.runtime.js';
import harmonyRuntimesBrowserRuntimeRuntime from '@bitdev/harmony.runtimes.browser-runtime/dist/browser-runtime.browser.runtime.js';
import harmonyAspectsPlatformAspectRuntime from '@bitdev/harmony.aspects.platform-aspect/dist/platform-aspect.browser.runtime.js';

// console.log({ Harmony, Slot });
// console.log({
//   harmonyExamplesPeopleAspect,
//   harmonyRuntimesBrowserRuntimeAspect,
//   harmonyAspectsPlatformAspectAspect,
//   harmonyExamplesPeopleRuntime,
//   harmonyRuntimesBrowserRuntimeRuntime,
//   harmonyAspectsPlatformAspectRuntime,
// });

function generateSlot(length = 5) {
  return Array.from(Array(length)).map(() => Slot.withType());
}


if (!harmonyExamplesPeopleRuntime.slots?.length && harmonyExamplesPeopleRuntime.provider.length >= 3) harmonyExamplesPeopleRuntime.slots = generateSlot(harmonyExamplesPeopleRuntime?.slotCount) 
if (!harmonyRuntimesBrowserRuntimeRuntime.slots?.length && harmonyRuntimesBrowserRuntimeRuntime.provider.length >= 3) harmonyRuntimesBrowserRuntimeRuntime.slots = generateSlot(harmonyRuntimesBrowserRuntimeRuntime?.slotCount) 
if (!harmonyAspectsPlatformAspectRuntime.slots?.length && harmonyAspectsPlatformAspectRuntime.provider.length >= 3) harmonyAspectsPlatformAspectRuntime.slots = generateSlot(harmonyAspectsPlatformAspectRuntime?.slotCount) 
harmonyExamplesPeopleRuntime.runtime = "browser";
harmonyExamplesPeopleAspect.addRuntime(harmonyExamplesPeopleRuntime);
harmonyRuntimesBrowserRuntimeRuntime.runtime = "browser";
harmonyRuntimesBrowserRuntimeAspect.addRuntime(harmonyRuntimesBrowserRuntimeRuntime);
harmonyAspectsPlatformAspectRuntime.runtime = "browser";
harmonyAspectsPlatformAspectAspect.addRuntime(harmonyAspectsPlatformAspectRuntime);

const isBrowser = typeof window !== "undefined";
const windowConfig = isBrowser ? window.harmonyAppConfig: undefined;
const config = JSON.parse('{"bitdev.harmony/examples/people":{"authProvider":"bit"},"bitdev.harmony/runtimes/browser-runtime":{},"bitdev.harmony/aspects/platform-aspect":{"domain":"wayne.teambit.games"},"teambit.harmony/bit":"bitdev.harmony/aspects/platform-aspect"}');
const mergedConfig = { ...config, ...windowConfig };
harmonyExamplesPeopleAspect.id = 'bitdev.harmony/examples/people';
harmonyRuntimesBrowserRuntimeAspect.id = 'bitdev.harmony/runtimes/browser-runtime';
harmonyAspectsPlatformAspectAspect.id = 'bitdev.harmony/aspects/platform-aspect';
export default function render(...props) {
  if (import.meta?.webpackHot) {
    import.meta?.webpackHot?.accept();
  }
  return Harmony.load([harmonyExamplesPeopleAspect, harmonyRuntimesBrowserRuntimeAspect, harmonyAspectsPlatformAspectAspect], 'browser', mergedConfig)
    .then((harmony) => {
      return harmony
      .run()
      .then(() => harmony.get('bitdev.harmony/aspects/platform-aspect'))
      .then((rootExtension) => {
        const ssrSetup = !isBrowser && rootExtension.setupSsr;
        const setup = rootExtension.setup;
        const setupFunc = (ssrSetup || setup || function noop(){}).bind(rootExtension);

        return (
          Promise.resolve(setupFunc())
            .then(() => rootExtension)
        );
      })
      .then((rootExtension) => {
        if (rootExtension.run) return rootExtension.run();
        if (isBrowser) {
          return rootExtension.render('bitdev.harmony/aspects/platform-aspect', ...props);
        } else {
          return rootExtension.renderSsr('bitdev.harmony/aspects/platform-aspect', ...props);
        }
      })
      .catch((err) => {
        throw err;
      });
    });
}

if (isBrowser || 'browser' === 'main' || false) render();

// export default function render() {
//   return 'hello world';
// }
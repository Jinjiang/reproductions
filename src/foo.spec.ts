import { render } from "@testing-library/vue";
import Foo from "./foo.vue";

it("should render with the correct text", () => {
  const { getByText } = render(Foo);
  const rendered = getByText(/Hello World/);
  expect(rendered).toBeTruthy();
});

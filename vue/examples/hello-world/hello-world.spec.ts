import { render } from "@testing-library/vue";
import { BasicHelloWorld } from "./hello-world.composition";

it("should render with the correct text", () => {
  const { getByText } = render(BasicHelloWorld);
  const rendered = getByText(/Welcome to Vue\.js on Bit!/);
  expect(rendered).toBeTruthy();
});

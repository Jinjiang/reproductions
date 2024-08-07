import { describe, it, expect } from "vitest";
import { render } from "@testing-library/vue";
import App from "./App.vue";

describe("App", () => {
  it("should render", async () => {
    const { getByText } = render(App);
    expect(getByText("My App")).not.toBeNull();
  });
});

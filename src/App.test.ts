import { it, expect } from "vitest";
// @ts-ignore
import { foo } from "foo";

it("should work", () => {
  expect(foo).toBe("foo");
});

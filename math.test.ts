import { expect, test } from "bun:test";

test("2 + 2 a", () => {
  expect(2 + 2).toBe(4);
});

test.only("2 + 2 b", () => {
  expect(2 + 2).toBe(4);
});

import { describe, expect, it } from "vitest";
import { clamp, sum, average } from "../src/math.js";

describe("clamp", () => {
  it("clamps above the max", () => {
    expect(clamp(10, 0, 5)).toBe(5);
  });

  it("clamps below the min", () => {
    expect(clamp(-10, 0, 5)).toBe(0);
  });

  it("returns the value when in range", () => {
    expect(clamp(3, 0, 5)).toBe(3);
  });

  it("rejects min > max", () => {
    expect(() => clamp(1, 5, 0)).toThrow();
  });
});

describe("sum", () => {
  it("sums positive numbers", () => {
    expect(sum([1, 2, 3])).toBe(6);
  });

  it("returns 0 for an empty array", () => {
    expect(sum([])).toBe(0);
  });
});

describe("average", () => {
  it("averages numbers", () => {
    expect(average([2, 4, 6])).toBe(4);
  });

  it("throws on empty input", () => {
    expect(() => average([])).toThrow();
  });
});

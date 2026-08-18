import { describe, expect, it } from "vitest";
import { truncate, capitalize, slugify } from "../src/strings.js";

describe("truncate", () => {
  it("returns the string unchanged when within limit", () => {
    expect(truncate("hello", 10)).toBe("hello");
  });

  it("appends the suffix when truncated", () => {
    expect(truncate("hello world", 8)).toBe("hello...");
  });

  it("handles an empty string", () => {
    expect(truncate("", 5)).toBe("");
  });

  it("rejects a negative max", () => {
    expect(() => truncate("x", -1)).toThrow();
  });
});

describe("capitalize", () => {
  it("capitalizes the first letter", () => {
    expect(capitalize("hello")).toBe("Hello");
  });

  it("handles an empty string", () => {
    expect(capitalize("")).toBe("");
  });
});

describe("slugify", () => {
  it("lowercases and hyphenates", () => {
    expect(slugify("Hello World")).toBe("hello-world");
  });

  it("strips leading/trailing separators", () => {
    expect(slugify("  foo bar  ")).toBe("foo-bar");
  });

  it("removes non-alphanumeric characters", () => {
    expect(slugify("a!b@c")).toBe("a-b-c");
  });
});

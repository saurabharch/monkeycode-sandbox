import { describe, expect, it } from "vitest";
import { truncate, capitalize, slugify, pad } from "../src/strings.js";

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

describe("pad", () => {
  it("pads a shorter string to the target length using the default space", () => {
    expect(pad("hi", 5)).toBe("hi   ");
  });

  it("returns the string unchanged when it already matches the target length", () => {
    expect(pad("hello", 5)).toBe("hello");
  });

  it("returns the string unchanged when it exceeds the target length", () => {
    expect(pad("hello world", 5)).toBe("hello world");
  });

  it("pads an empty string to the target length", () => {
    expect(pad("", 3)).toBe("   ");
  });

  it("repeats a custom pad string", () => {
    expect(pad("ab", 6, "._")).toBe("ab._._");
  });

  it("truncates a partial repetition of a custom pad string", () => {
    expect(pad("a", 6, "._")).toBe("a._._.");
  });

  it("uses a single space when no pad string is given", () => {
    expect(pad("x", 4)).toBe("x   ");
  });

  it("returns the value unchanged when given an empty pad string", () => {
    expect(pad("hi", 5, "")).toBe("hi");
  });
});

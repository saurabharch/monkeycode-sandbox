/**
 * String utilities for the MonkeyCode sandbox demo.
 * Small, safe, dependency-free helpers with obvious test surface.
 */

/** Truncate a string to `max` chars, appending `suffix` when truncated. */
export function truncate(value: string, max: number, suffix = "..."): string {
  if (max < 0) throw new Error("max must be >= 0");
  if (value.length <= max) return value;
  return value.slice(0, Math.max(0, max - suffix.length)) + suffix;
}

/** Capitalize the first letter of a string. */
export function capitalize(value: string): string {
  if (value.length === 0) return value;
  return value.charAt(0).toUpperCase() + value.slice(1);
}

/** Convert a string to a URL-safe slug (lowercase, hyphens). */
export function slugify(value: string): string {
  return value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/** Return true when a string reads the same forwards and backwards. */
export function isPalindrome(s: string): boolean {
  return s === s.split("").reverse().join("");
}

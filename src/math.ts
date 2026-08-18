/**
 * Math utilities for the MonkeyCode sandbox demo.
 */

/** Clamp a number into the inclusive [min, max] range. */
export function clamp(value: number, min: number, max: number): number {
  if (min > max) throw new Error("min must be <= max");
  return Math.min(Math.max(value, min), max);
}

/** Return the sum of an array of numbers (0 for empty input). */
export function sum(values: number[]): number {
  return values.reduce((acc, n) => acc + n, 0);
}

/** Return the average of an array of numbers (throws on empty input). */
export function average(values: number[]): number {
  if (values.length === 0) throw new Error("cannot average an empty list");
  return sum(values) / values.length;
}

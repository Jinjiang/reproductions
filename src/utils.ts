/**
 * Shared utility functions for components
 */

/**
 * Increments a counter value
 * @param current The current counter value
 * @returns The incremented counter value
 */
export function incrementCounter(current: number): number {
  return current + 1;
}

/**
 * Resets a counter value to zero
 * @returns Zero
 */
export function resetCounter(): number {
  return 0;
}

/**
 * Formats a button label with optional prefix
 * @param label The base label
 * @param prefix Optional prefix to add
 * @returns The formatted label
 */
export function formatButtonLabel(label: string, prefix?: string): string {
  return prefix ? `${prefix}: ${label}` : label;
}

/**
 * Validates button variant
 * @param variant The variant to validate
 * @returns true if variant is valid
 */
export function isValidVariant(variant: string): boolean {
  return ['primary', 'secondary'].includes(variant);
}

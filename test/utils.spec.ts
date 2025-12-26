import { incrementCounter, resetCounter, formatButtonLabel, isValidVariant } from '../src/utils';

describe('Utils', () => {
  describe('incrementCounter', () => {
    it('should increment counter by 1', () => {
      expect(incrementCounter(0)).toBe(1);
      expect(incrementCounter(5)).toBe(6);
      expect(incrementCounter(-1)).toBe(0);
    });
  });

  describe('resetCounter', () => {
    it('should return 0', () => {
      expect(resetCounter()).toBe(0);
    });
  });

  describe('formatButtonLabel', () => {
    it('should return label as is when no prefix', () => {
      expect(formatButtonLabel('Click me')).toBe('Click me');
    });

    it('should prepend prefix when provided', () => {
      expect(formatButtonLabel('Click me', 'Button')).toBe('Button: Click me');
    });
  });

  describe('isValidVariant', () => {
    it('should return true for valid variants', () => {
      expect(isValidVariant('primary')).toBe(true);
      expect(isValidVariant('secondary')).toBe(true);
    });

    it('should return false for invalid variants', () => {
      expect(isValidVariant('danger')).toBe(false);
      expect(isValidVariant('success')).toBe(false);
      expect(isValidVariant('')).toBe(false);
    });
  });
});

import { describe, it, expect } from 'vitest';
import { cn } from '../utils';

describe('utils', () => {
  describe('cn function', () => {
    it('merges class names correctly', () => {
      const result = cn('text-red-500', 'bg-blue-500');
      expect(result).toBe('text-red-500 bg-blue-500');
    });

    it('handles conditional classes', () => {
      const result = cn('base-class', true && 'conditional-class', false && 'hidden-class');
      expect(result).toBe('base-class conditional-class');
    });

    it('handles Tailwind CSS conflicts', () => {
      const result = cn('p-4', 'p-2');
      expect(result).toBe('p-2');
    });

    it('handles undefined and null values', () => {
      const result = cn('base-class', undefined, null, 'another-class');
      expect(result).toBe('base-class another-class');
    });

    it('handles arrays of classes', () => {
      const result = cn(['text-red-500', 'bg-blue-500'], 'additional-class');
      expect(result).toBe('text-red-500 bg-blue-500 additional-class');
    });

    it('handles empty input', () => {
      const result = cn();
      expect(result).toBe('');
    });

    it('merges object-style class conditions', () => {
      const result = cn({
        'text-red-500': true,
        'bg-blue-500': false,
        'font-bold': true,
      });
      expect(result).toBe('text-red-500 font-bold');
    });
  });
});
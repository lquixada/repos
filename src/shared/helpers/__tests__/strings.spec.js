import {addSeparator} from '../strings';

describe('Helpers (String)', () => {
  describe('addSeparator', () => {
    describe('adds separator', () => {
      it('to a four-digit number', () => {
        expect(addSeparator(1234)).toBe('1.234');
        expect(addSeparator('1234')).toBe('1.234');
      });

      it('to a seven-digit number', () => {
        expect(addSeparator(1234567)).toBe('1.234.567');
        expect(addSeparator('1234567')).toBe('1.234.567');
      });

      it('to a ten-digit number', () => {
        expect(addSeparator(1234567890)).toBe('1.234.567.890');
        expect(addSeparator('1234567890')).toBe('1.234.567.890');
      });
    });

    describe('doesn\'t add separator', () => {
      it('to a one-digit number', () => {
        expect(addSeparator(1)).toBe('1');
        expect(addSeparator('1')).toBe('1');
      });

      it('to a two-digit number', () => {
        expect(addSeparator(12)).toBe('12');
        expect(addSeparator('12')).toBe('12');
      });

      it('to a three-digit number', () => {
        expect(addSeparator(123)).toBe('123');
        expect(addSeparator('123')).toBe('123');
      });
    });

    describe('invalid values', () => {
      it('returns zero if undefined is given', () => {
        expect(addSeparator(undefined)).toBe('0');
      });

      it('returns zero if null is given', () => {
        expect(addSeparator(null)).toBe('0');
      });

      it('returns zero if any object is given', () => {
        expect(addSeparator({})).toBe('0');
      });
    });
  });
});

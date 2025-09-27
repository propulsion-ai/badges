import { getColorFromText } from '../src/utils/colorMapper';

describe('Color Mapper', () => {
  describe('getColorFromText', () => {
    it('generates consistent colors for the same text', () => {
      const color1 = getColorFromText('consistency');
      const color2 = getColorFromText('consistency');

      expect(color1).toBe(color2);
    });

    it('generates different colors for different text', () => {
      const color1 = getColorFromText('apple');
      const color2 = getColorFromText('banana');

      expect(color1).not.toBe(color2);
    });

    it('returns valid hex color format', () => {
      const color = getColorFromText('test');
      expect(color).toMatch(/^#[0-9A-F]{6}$/i);
    });

    it('handles empty string', () => {
      const color = getColorFromText('');
      expect(color).toMatch(/^#[0-9A-F]{6}$/i);
    });

    it('handles special characters', () => {
      const color = getColorFromText('!@#$%^&*()');
      expect(color).toMatch(/^#[0-9A-F]{6}$/i);
    });

    it('handles unicode characters', () => {
      const color = getColorFromText('🎨 Color 色');
      expect(color).toMatch(/^#[0-9A-F]{6}$/i);
    });

    it('handles very long text', () => {
      const longText = 'a'.repeat(1000);
      const color = getColorFromText(longText);
      expect(color).toMatch(/^#[0-9A-F]{6}$/i);
    });

    it('is case sensitive', () => {
      const color1 = getColorFromText('Test');
      const color2 = getColorFromText('test');

      expect(color1).not.toBe(color2);
    });

    it('handles numbers', () => {
      const color = getColorFromText('12345');
      expect(color).toMatch(/^#[0-9A-F]{6}$/i);
    });

    it('handles mixed content', () => {
      const color = getColorFromText('User123-Badge_Test');
      expect(color).toMatch(/^#[0-9A-F]{6}$/i);
    });
  });
});
import { generateBadgeColorPairs, getBadgeVariant, isLightColor } from '../src/utils/badgeUtils';

describe('Badge Utils', () => {
  describe('isLightColor', () => {
    it('correctly identifies light colors', () => {
      expect(isLightColor('#FFFFFF')).toBe(true);
      expect(isLightColor('#F0F0F0')).toBe(true);
      expect(isLightColor('#FFFF00')).toBe(true);
      expect(isLightColor('#00FFFF')).toBe(true);
    });

    it('correctly identifies dark colors', () => {
      expect(isLightColor('#000000')).toBe(false);
      expect(isLightColor('#333333')).toBe(false);
      expect(isLightColor('#0000FF')).toBe(false);
      expect(isLightColor('#800080')).toBe(false);
    });
  });

  describe('generateBadgeColorPairs', () => {
    it('generates consistent colors for the same text', () => {
      const colors1 = generateBadgeColorPairs('test');
      const colors2 = generateBadgeColorPairs('test');

      expect(colors1.backgroundColor).toBe(colors2.backgroundColor);
      expect(colors1.textColor).toBe(colors2.textColor);
    });

    it('generates different colors for different text', () => {
      const colors1 = generateBadgeColorPairs('first');
      const colors2 = generateBadgeColorPairs('second');

      expect(colors1.backgroundColor).not.toBe(colors2.backgroundColor);
    });

    it('generates appropriate text color based on background', () => {
      const colors = generateBadgeColorPairs('example');

      expect(colors.backgroundColor).toMatch(/^#[0-9A-F]{6}$/i);
      expect(colors.textColor).toMatch(/^#[0-9A-F]{6}$/i);
    });

    it('handles empty string', () => {
      const colors = generateBadgeColorPairs('');

      expect(colors.backgroundColor).toMatch(/^#[0-9A-F]{6}$/i);
      expect(colors.textColor).toMatch(/^#[0-9A-F]{6}$/i);
    });

    it('handles special characters', () => {
      const colors = generateBadgeColorPairs('!@#$%^&*()');

      expect(colors.backgroundColor).toMatch(/^#[0-9A-F]{6}$/i);
      expect(colors.textColor).toMatch(/^#[0-9A-F]{6}$/i);
    });
  });

  describe('getBadgeVariant', () => {
    const baseColors = {
      backgroundColor: '#FF0000',
      textColor: '#FFFFFF'
    };

    it('returns styled object for solid variant', () => {
      const result = getBadgeVariant(baseColors, 'solid');
      expect(result.backgroundColor).toBe('#FF0000');
      expect(result.color).toBe('#FFFFFF');
      expect(result.border).toContain('0.5px solid');
    });

    it('applies outline variant styling', () => {
      const result = getBadgeVariant(baseColors, 'outline');

      expect(result.backgroundColor).toBe('transparent');
      expect(result.border).toContain('#FF0000');
      expect(result.color).toBe('#FFFFFF'); // Uses textColor from input
    });

    it('applies ghost variant styling', () => {
      const result = getBadgeVariant(baseColors, 'ghost');

      expect(result.backgroundColor).toBe('transparent');
      expect(result.color).toBe('#FFFFFF'); // Uses textColor from input
      expect(result.border).toBe('none'); // No border for ghost
    });

    it('applies soft variant styling', () => {
      const result = getBadgeVariant(baseColors, 'soft');

      expect(result.backgroundColor).toBe('#FF0000');
      expect(result.color).toBe('#FFFFFF'); // Uses textColor from input
      expect(result.border).toContain('0.5px solid');
    });

    it('handles undefined variant', () => {
      const result = getBadgeVariant(baseColors, undefined);
      expect(result.backgroundColor).toBe('#FF0000');
      expect(result.color).toBe('#FFFFFF');
    });
  });
});
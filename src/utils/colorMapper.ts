import ColorHash from 'color-hash';

// Use higher saturation and lightness for pastel colors
const colorHash = new ColorHash({
  lightness: [0.45, 0.5, 0.55], // Medium lightness for base color
  saturation: [0.7, 0.75, 0.8], // High saturation for vibrant pastels
  hue: { min: 0, max: 360 }
});

/**
 * Generate a consistent base color from text
 */
export function getColorFromText(text: string): string {
  return colorHash.hex(text);
}

/**
 * Convert hex to RGB
 */
function hexToRgb(hex: string): { r: number; g: number; b: number } {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : { r: 0, g: 0, b: 0 };
}

/**
 * Convert RGB to HSL
 */
function rgbToHsl(r: number, g: number, b: number): { h: number; s: number; l: number } {
  r /= 255;
  g /= 255;
  b /= 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0;
  let s = 0;
  const l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

    switch (max) {
      case r:
        h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
        break;
      case g:
        h = ((b - r) / d + 2) / 6;
        break;
      case b:
        h = ((r - g) / d + 4) / 6;
        break;
    }
  }

  return { h: h * 360, s, l };
}

/**
 * Convert HSL to hex
 */
function hslToHex(h: number, s: number, l: number): string {
  h = h / 360;

  let r: number, g: number, b: number;

  if (s === 0) {
    r = g = b = l;
  } else {
    const hue2rgb = (p: number, q: number, t: number): number => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    };

    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;

    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }

  const toHex = (x: number): string => {
    const hex = Math.round(x * 255).toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  };

  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

/**
 * Generate pastel color scheme from base color
 */
export function generatePastelColors(baseColor: string, mode: 'light' | 'dark' = 'light') {
  const rgb = hexToRgb(baseColor);
  const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);

  let backgroundColor: string;
  let borderColor: string;
  let textColor: string;

  if (mode === 'light') {
    // Light mode: very light background, medium border/text
    backgroundColor = hslToHex(hsl.h, hsl.s * 0.4, 0.94); // Very light pastel background
    borderColor = hslToHex(hsl.h, hsl.s * 0.5, 0.85); // Slightly darker border
    textColor = hslToHex(hsl.h, hsl.s * 0.9, 0.35); // Darker text for contrast
  } else {
    // Dark mode: darker background, lighter border/text
    backgroundColor = hslToHex(hsl.h, hsl.s * 0.3, 0.15); // Dark background
    borderColor = hslToHex(hsl.h, hsl.s * 0.4, 0.25); // Slightly lighter border
    textColor = hslToHex(hsl.h, hsl.s * 0.5, 0.75); // Light text for contrast
  }

  return {
    backgroundColor,
    borderColor,
    textColor
  };
}
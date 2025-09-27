import ColorHash from "color-hash";
import { ThemeMode, BadgeColors, ColorHashConfig, HSL } from "./types";

// Optimized color configurations for better visual appeal
const COLOR_CONFIGS: Record<ThemeMode, ColorHashConfig> = {
  light: {
    hue: { min: 0, max: 360 }, // Full hue range for more variety
    saturation: [0.6, 0.7, 0.8], // Higher saturation for vibrancy
    lightness: [0.85, 0.9, 0.95], // Light backgrounds
  },
  dark: {
    hue: { min: 0, max: 360 },
    saturation: [0.5, 0.6, 0.7],
    lightness: [0.15, 0.2, 0.25], // Dark backgrounds
  },
};

// Create hashers for each mode
const hashers = {
  light: new ColorHash(COLOR_CONFIGS.light),
  dark: new ColorHash(COLOR_CONFIGS.dark),
};

/**
 * Safely adjusts lightness within valid bounds (0-1)
 */
function adjustLightness(hsl: HSL, delta: number): HSL {
  return {
    ...hsl,
    l: Math.max(0, Math.min(1, hsl.l + delta)),
  };
}

/**
 * Converts HSL values to hex color string
 */
function hslToHex(h: number, s: number, l: number): string {
  const hNormalized = h / 360;
  
  let r: number, g: number, b: number;
  
  if (s === 0) {
    r = g = b = l; // achromatic
  } else {
    const hue2rgb = (p: number, q: number, t: number): number => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1/6) return p + (q - p) * 6 * t;
      if (t < 1/2) return q;
      if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
      return p;
    };
    
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    
    r = hue2rgb(p, q, hNormalized + 1/3);
    g = hue2rgb(p, q, hNormalized);
    b = hue2rgb(p, q, hNormalized - 1/3);
  }
  
  const toHex = (component: number): string => {
    const hex = Math.round(component * 255).toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  };
  
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

/**
 * Generates consistent, accessible colors for a badge based on input string and theme
 */
export function getBadgeColor(input: string, mode: ThemeMode = "light"): BadgeColors {
  if (!input.trim()) {
    // Fallback for empty strings
    return mode === 'light' 
      ? { background: '#f0f0f0', border: '#d0d0d0', text: '#666666' }
      : { background: '#2a2a2a', border: '#4a4a4a', text: '#cccccc' };
  }

  const hasher = hashers[mode];
  const baseHex = hasher.hex(input);
  const [h, s, l] = hasher.hsl(input);
  
  const baseHsl: HSL = { h, s, l };
  
  let borderHsl: HSL;
  let textHsl: HSL;
  
  if (mode === "light") {
    // In light mode: darken for border and text for contrast
    borderHsl = adjustLightness(baseHsl, -0.15);
    textHsl = adjustLightness(baseHsl, -0.4);
    
    // Increase saturation slightly for more vibrant borders/text
    borderHsl.s = Math.min(1, borderHsl.s * 1.1);
    textHsl.s = Math.min(1, textHsl.s * 1.2);
  } else {
    // In dark mode: lighten for border and text for contrast
    borderHsl = adjustLightness(baseHsl, 0.2);
    textHsl = adjustLightness(baseHsl, 0.5);
    
    // Adjust saturation for better visibility
    borderHsl.s = Math.min(1, borderHsl.s * 1.1);
    textHsl.s = Math.min(1, textHsl.s * 1.15);
  }
  
  return {
    background: baseHex,
    border: hslToHex(borderHsl.h, borderHsl.s, borderHsl.l),
    text: hslToHex(textHsl.h, textHsl.s, textHsl.l),
  };
}

/**
 * Alternative color generation with predefined palette for more consistent results
 */
export function getBadgeColorFromPalette(input: string, mode: ThemeMode = "light"): BadgeColors {
  const lightPalette = [
    { bg: '#e3f2fd', border: '#1976d2', text: '#0d47a1' },
    { bg: '#f3e5f5', border: '#7b1fa2', text: '#4a148c' },
    { bg: '#e8f5e8', border: '#388e3c', text: '#1b5e20' },
    { bg: '#fff3e0', border: '#f57c00', text: '#e65100' },
    { bg: '#fce4ec', border: '#c2185b', text: '#880e4f' },
    { bg: '#e0f2f1', border: '#00695c', text: '#004d40' },
  ];
  
  const darkPalette = [
    { bg: '#1a237e', border: '#3f51b5', text: '#c5cae9' },
    { bg: '#4a148c', border: '#9c27b0', text: '#e1bee7' },
    { bg: '#1b5e20', border: '#4caf50', text: '#c8e6c9' },
    { bg: '#e65100', border: '#ff9800', text: '#ffe0b2' },
    { bg: '#880e4f', border: '#e91e63', text: '#f8bbd9' },
    { bg: '#004d40', border: '#009688', text: '#b2dfdb' },
  ];
  
  const palette = mode === 'light' ? lightPalette : darkPalette;
  
  // Simple hash to index into palette
  let hash = 0;
  for (let i = 0; i < input.length; i++) {
    hash = ((hash << 5) - hash + input.charCodeAt(i)) & 0xffffffff;
  }
  
  const colors = palette[Math.abs(hash) % palette.length];
  return {
    background: colors.bg,
    border: colors.border,
    text: colors.text,
  };
}
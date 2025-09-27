// Simple test file to verify badge color generation
// Run with: node simple-test.cjs

const { default: ColorHash } = require('color-hash');

// Simplified version of the color generation logic for testing
function generateTestColors(input, mode = 'light') {
  const lightConfig = {
    hue: { min: 0, max: 360 },
    saturation: [0.6, 0.7, 0.8],
    lightness: [0.85, 0.9, 0.95],
  };
  
  const darkConfig = {
    hue: { min: 0, max: 360 },
    saturation: [0.5, 0.6, 0.7],
    lightness: [0.15, 0.2, 0.25],
  };
  
  const config = mode === 'light' ? lightConfig : darkConfig;
  const hasher = new ColorHash(config);
  
  const baseHex = hasher.hex(input);
  const [h, s, l] = hasher.hsl(input);
  
  // Simple color adjustments
  function adjustLightness(baseL, delta) {
    return Math.max(0, Math.min(1, baseL + delta));
  }
  
  function hslToHex(h, s, l) {
    h /= 360;
    let r, g, b;
    
    if (s === 0) {
      r = g = b = l;
    } else {
      const hue2rgb = (p, q, t) => {
        if (t < 0) t += 1;
        if (t > 1) t -= 1;
        if (t < 1/6) return p + (q - p) * 6 * t;
        if (t < 1/2) return q;
        if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
        return p;
      };
      
      const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      const p = 2 * l - q;
      
      r = hue2rgb(p, q, h + 1/3);
      g = hue2rgb(p, q, h);
      b = hue2rgb(p, q, h - 1/3);
    }
    
    const toHex = (x) => {
      const hex = Math.round(x * 255).toString(16);
      return hex.length === 1 ? "0" + hex : hex;
    };
    
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
  }
  
  let borderL, textL;
  
  if (mode === 'light') {
    borderL = adjustLightness(l, -0.15);
    textL = adjustLightness(l, -0.4);
  } else {
    borderL = adjustLightness(l, 0.2);
    textL = adjustLightness(l, 0.5);
  }
  
  return {
    background: baseHex,
    border: hslToHex(h, Math.min(1, s * 1.1), borderL),
    text: hslToHex(h, Math.min(1, s * 1.2), textL),
  };
}

// Test the color generation
console.log('=== Badge Color Generation Test ===\n');

const testCases = [
  'React',
  'TypeScript',
  'JavaScript', 
  'Vue',
  'Angular',
  'special-chars_123!@#',
  'Empty should work too',
];

console.log('Testing Light Mode:');
testCases.forEach(input => {
  const colors = generateTestColors(input, 'light');
  console.log(`"${input}": bg=${colors.background}, border=${colors.border}, text=${colors.text}`);
});

console.log('\nTesting Dark Mode:');
testCases.forEach(input => {
  const colors = generateTestColors(input, 'dark');
  console.log(`"${input}": bg=${colors.background}, border=${colors.border}, text=${colors.text}`);
});

console.log('\nTesting Consistency:');
const testInput = 'React';
const colors1 = generateTestColors(testInput, 'light');
const colors2 = generateTestColors(testInput, 'light');
console.log(`Same input generates same colors: ${JSON.stringify(colors1) === JSON.stringify(colors2)}`);

console.log('\nTesting Edge Cases:');
['', '   ', 'A', '🚀'].forEach(input => {
  try {
    const colors = generateTestColors(input, 'light');
    console.log(`"${input}" (len: ${input.length}): SUCCESS - ${colors.background}`);
  } catch (error) {
    console.log(`"${input}": ERROR - ${error.message}`);
  }
});

console.log('\n=== All Tests Completed ===');
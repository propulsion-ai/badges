# Badge Color Generator

A TypeScript-first, reusable badge color generator that creates consistent, accessible colors for any string input. Optimized for both light and dark themes with minimal configuration.

## Features

- 🎨 **Consistent Colors**: Same input always generates the same colors
- 🌓 **Theme Support**: Optimized for light and dark modes
- 🔧 **TypeScript**: Full type safety and IntelliSense support
- ♿ **Accessible**: High contrast ratios for readability
- 🎯 **Zero Config**: Works out of the box with sensible defaults
- 🔄 **Multiple Strategies**: Hash-based generation or predefined palettes

## Quick Start

```tsx
import { generateBadgeColors, Badge } from './badgeUtils';

// Generate colors for any string
const colors = generateBadgeColors("React", { mode: "light" });
// Returns: { background: "#e3f2fd", border: "#1976d2", text: "#0d47a1" }

// Use the Badge component
<Badge label="TypeScript" mode="light" onClick={() => console.log('clicked')} />
```

## Core API

### `generateBadgeColors(input, options)`

The main function for generating badge colors.

```typescript
const colors = generateBadgeColors("JavaScript", {
  mode: "light", // "light" | "dark"
  usePalette: false // true for predefined palette, false for hash generation
});
```

### `Badge` Component

A complete React component with hover effects and accessibility features.

```tsx
<Badge 
  label="Your Text"
  mode="light"
  onClick={() => {}} // Optional click handler
  className="custom-class" // Optional CSS class
/>
```

## Utility Functions

### CSS Generation
```typescript
const css = generateBadgeCSS("React", { mode: "dark" });
// Returns CSS custom properties string
```

### Style Objects
```typescript
const styles = generateBadgeStyles("Vue", { 
  mode: "light",
  additionalStyles: { padding: "8px" }
});
// Returns React CSSProperties object
```

### Batch Generation
```typescript
const colors = generateMultipleBadgeColors(
  ["React", "Vue", "Angular"], 
  { mode: "light" }
);
// Returns object with colors for each input
```

## Color Strategies

### 1. Hash-Based Generation (Default)
- Uses ColorHash library for consistent color generation
- Full hue range for maximum variety
- Automatically adjusts contrast for accessibility

### 2. Predefined Palette
```typescript
const colors = generateBadgeColors("React", { usePalette: true });
```
- Uses curated color combinations
- More consistent visual appearance
- Better for design systems

## Examples

### Basic Usage
```typescript
// Light mode
const lightColors = generateBadgeColors("TypeScript", { mode: "light" });

// Dark mode  
const darkColors = generateBadgeColors("TypeScript", { mode: "dark" });

// With palette
const paletteColors = generateBadgeColors("React", { usePalette: true });
```

### React Integration
```tsx
function TagList({ tags }: { tags: string[] }) {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  
  return (
    <div>
      {tags.map(tag => (
        <Badge 
          key={tag}
          label={tag}
          mode={theme}
          onClick={() => console.log(`Selected: ${tag}`)}
        />
      ))}
    </div>
  );
}
```

### CSS-in-JS Integration
```tsx
import styled from 'styled-components';

const StyledBadge = styled.span<{ colors: BadgeColors }>`
  background-color: ${props => props.colors.background};
  border: 1px solid ${props => props.colors.border};
  color: ${props => props.colors.text};
  padding: 6px 12px;
  border-radius: 4px;
`;

function CustomBadge({ label }: { label: string }) {
  const colors = generateBadgeColors(label);
  return <StyledBadge colors={colors}>{label}</StyledBadge>;
}
```

## Testing

Run the test suite to verify functionality:

```bash
npm run test
```

The tests cover:
- Color consistency
- Edge cases (empty strings, special characters)
- Theme variations
- Case sensitivity
- Batch operations

## Type Safety

Full TypeScript support with exported types:

```typescript
import { ThemeMode, BadgeColors, BadgeProps } from './types';

const mode: ThemeMode = 'light';
const colors: BadgeColors = generateBadgeColors('test');
```

## Browser Support

- Modern browsers with ES2020 support
- React 16.8+ for hooks usage
- No IE support (uses modern color functions)

## Performance

- Lightweight: ~3KB gzipped (excluding React)
- Fast: O(1) color generation
- Memoization-friendly: Pure functions with consistent outputs

## Customization

The color generation can be customized by modifying the `COLOR_CONFIGS` in `colorMapper.ts`:

```typescript
const COLOR_CONFIGS = {
  light: {
    hue: { min: 0, max: 360 },
    saturation: [0.6, 0.7, 0.8],
    lightness: [0.85, 0.9, 0.95],
  },
  // ... customize as needed
};
```

## License

MIT License - see LICENSE file for details.
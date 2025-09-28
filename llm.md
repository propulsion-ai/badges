# consistint

> A lightweight React component library for creating beautiful, auto-colored badges with consistent pastel color generation based on text content.

## Installation

```bash
npm install consistint
# or
yarn add consistint
# or
pnpm add consistint
```

## Core Components

### Badge
Main component for rendering pastel-colored badges.

```tsx
import { Badge } from 'consistint';

<Badge text="Status" />
<Badge text="Priority" variant="outline" />
<Badge text="Dark Mode" mode="dark" />
<Badge text="Custom Font" font="Arial" />
```

**Props:**
- `text: string` (required) - Badge text content
- `variant?: 'filled' | 'outline' | 'ghost'` - Visual style (default: 'filled')
- `mode?: 'light' | 'dark'` - Color mode (default: 'light')
- `font?: string` - Font family (inherits from parent)
- `borderWidth?: number` - Border width in pixels (default: 0.5)
- `colorParams?: ColorParameters` - Custom color generation parameters
- `className?: string` - Additional CSS classes
- `onClick?: () => void` - Click handler

### BadgeDemo
Demo component showcasing badge variations.

```tsx
import { BadgeDemo } from 'consistint';

<BadgeDemo />
```

## Utility Functions

### Color Generation

#### generateBadgeColors
Generate complete color scheme with pastel colors.

```tsx
import { generateBadgeColors } from 'consistint';

const colors = generateBadgeColors('example', 'light');
// Returns: { backgroundColor: string, borderColor: string, textColor: string }
```

#### generateBadgeColorPairs
Generate color pairs for custom implementations.

```tsx
import { generateBadgeColorPairs } from 'consistint';

const colors = generateBadgeColorPairs('example');
// Returns: { backgroundColor: string, textColor: string }
```

#### getColorFromText
Get consistent color from text using hash algorithm.

```tsx
import { getColorFromText } from 'consistint';

const hue = getColorFromText('example');
// Returns: number (0-360)
```

#### generatePastelColors
Generate pastel color scheme from hue value.

```tsx
import { generatePastelColors } from 'consistint';

const colors = generatePastelColors(180, 'light', colorParams);
// Returns: { backgroundColor: string, borderColor: string, textColor: string }
```

### Style Utilities

#### getBadgeStyles
Get complete badge styles object.

```tsx
import { getBadgeStyles } from 'consistint';

const styles = getBadgeStyles(variant, colors, borderWidth);
// Returns: CSSProperties object
```

#### getBadgeVariant
Get variant-specific styles.

```tsx
import { getBadgeVariant } from 'consistint';

const styles = getBadgeVariant(variant, colors);
// Returns: CSSProperties object
```

#### isLightColor
Check if a color is light or dark.

```tsx
import { isLightColor } from 'consistint';

const isLight = isLightColor('#ffffff');
// Returns: boolean
```

## Type Definitions

### BadgeVariant
```tsx
type BadgeVariant = 'filled' | 'outline' | 'ghost';
```

### BadgeMode
```tsx
type BadgeMode = 'light' | 'dark';
```

### ColorScheme
```tsx
interface ColorScheme {
  backgroundColor: string;
  borderColor: string;
  textColor: string;
}
```

### ColorParameters
```tsx
interface ColorParameters {
  light: {
    backgroundSaturation: number;  // 0-1
    backgroundLightness: number;    // 0-1
    borderSaturation: number;       // 0-1
    borderLightness: number;        // 0-1
    textSaturation: number;         // 0-1
    textLightness: number;          // 0-1
  };
  dark: {
    backgroundSaturation: number;
    backgroundLightness: number;
    borderSaturation: number;
    borderLightness: number;
    textSaturation: number;
    textLightness: number;
  };
}
```

### BadgeConfig
```tsx
interface BadgeConfig {
  text: string;
  variant?: BadgeVariant;
  mode?: BadgeMode;
  font?: string;
  borderWidth?: number;
  colorParams?: ColorParameters;
  className?: string;
  onClick?: () => void;
}
```

## Default Color Values

### Light Mode
- Background: 40% saturation, 94% lightness
- Border: 50% saturation, 85% lightness  
- Text: 90% saturation, 35% lightness

### Dark Mode
- Background: 30% saturation, 15% lightness
- Border: 40% saturation, 25% lightness
- Text: 60% saturation, 85% lightness

## Common Usage Patterns

### Status Badges
```tsx
<Badge text="Success" />
<Badge text="Warning" />
<Badge text="Error" />
```

### Tag System
```tsx
const tags = ['React', 'TypeScript', 'CSS'];
tags.map(tag => <Badge key={tag} text={tag} variant="outline" />)
```

### Dark Mode Toggle
```tsx
const [isDark, setIsDark] = useState(false);
<Badge text="Theme" mode={isDark ? 'dark' : 'light'} />
```

### Custom Color Parameters
```tsx
const customColors: ColorParameters = {
  light: {
    backgroundSaturation: 0.3,
    backgroundLightness: 0.96,
    borderSaturation: 0.4,
    borderLightness: 0.88,
    textSaturation: 0.8,
    textLightness: 0.3
  },
  dark: {
    backgroundSaturation: 0.25,
    backgroundLightness: 0.12,
    borderSaturation: 0.35,
    borderLightness: 0.22,
    textSaturation: 0.45,
    textLightness: 0.8
  }
};

<Badge text="Custom" colorParams={customColors} />
```

## Dependencies

- react: ^18.2.0
- color-hash: ^2.0.2

## Links

- Demo: https://propulsion-ai.github.io/badges/
- npm: https://www.npmjs.com/package/consistint
- GitHub: https://github.com/propulsion-ai/badges
- Issues: https://github.com/propulsion-ai/badges/issues

## License

MIT

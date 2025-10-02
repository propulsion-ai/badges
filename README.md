# Consistint - Badge Generator

[![CI](https://github.com/propulsion-ai/badges/actions/workflows/ci.yml/badge.svg)](https://github.com/propulsion-ai/badges/actions/workflows/ci.yml)
[![npm version](https://img.shields.io/npm/v/consistint.svg)](https://www.npmjs.com/package/consistint)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18%2B-61dafb.svg)](https://reactjs.org/)

A lightweight React component library for creating beautiful, auto-colored badges with consistent color generation based on text content.

🎯 **[Live Demo & Playground →](https://propulsion-ai.github.io/badges/)**

## ✨ Features

- 🎨 **Pastel Color Palette** - Beautiful, consistent pastel colors from text
- 🎭 **Two Variants** - Filled (with background) and Outline styles
- 🌓 **Dark Mode Support** - Built-in light/dark mode with optimized colors
- 🔤 **Customizable Font** - Use any font family, defaults to system fonts
- 🎮 **Interactive Playground** - Fine-tune colors with our live editor
- 🔧 **TypeScript Support** - Full type safety and IntelliSense support
- ⚡ **Lightweight** - Minimal dependencies, optimized bundle size
- 🎯 **Consistent** - Same text always generates the same color

## 📦 Installation

```bash
npm install consistint
# or
yarn add consistint
# or
pnpm add consistint
```

## 🚀 Quick Start

```tsx
import { Badge } from 'consistint';

function App() {
  return (
    <div>
      <Badge text="New Feature" />
      <Badge text="Bug Fix" variant="outline" />
      <Badge text="Documentation" mode="dark" />
      <Badge text="Beta" variant="ghost" />  {/* Ghost variant = no border */}
    </div>
  );
}
```

### Customizing Color Generation

You can customize how colors are generated using the `colorParams` prop. This allows you to adjust the saturation and lightness values used in the HSL color generation:

```tsx
import { Badge, ColorParameters } from 'consistint';

function App() {
  // Custom pastel parameters
  const customColorParams: ColorParameters = {
    light: {
      backgroundSaturation: 0.3,  // Softer background (default: 0.4)
      backgroundLightness: 0.96,   // Lighter background (default: 0.94)
      borderSaturation: 0.4,       // Softer border (default: 0.5)
      borderLightness: 0.88,       // Lighter border (default: 0.85)
      textSaturation: 0.8,         // Less saturated text (default: 0.9)
      textLightness: 0.3           // Lighter text (default: 0.35)
    },
    dark: {
      backgroundSaturation: 0.25,  // Adjust dark mode too
      backgroundLightness: 0.12,
      borderSaturation: 0.35,
      borderLightness: 0.22,
      textSaturation: 0.45,
      textLightness: 0.8
    }
  };

  return (
    <div>
      {/* Use custom color parameters for all badges */}
      <Badge text="Softer" colorParams={customColorParams} />
      <Badge text="Pastel" colorParams={customColorParams} />
      <Badge text="Colors" colorParams={customColorParams} mode="dark" />
    </div>
  );
}
```

You can also use the Color Playground at https://propulsion-ai.github.io/badges/ to experiment with different values and find your perfect color scheme.

## 📖 Documentation

### Badge Component

The main component for rendering badges with pastel colors.

#### Default Styles
- **Padding**: `2px 5px`
- **Border Radius**: `5px`
- **Border Width**: `0.5px` (0 for ghost variant)
- **Typography**: Inherits from parent (font, size, weight, line-height)

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `text` | `string` | *required* | The text to display in the badge |
| `variant` | `'filled' \| 'outline' \| 'ghost'` | `'filled'` | Visual style variant (ghost = no border) |
| `mode` | `'light' \| 'dark'` | `'light'` | Color mode for the badge |
| `font` | `string` | Inherit | Font family (inherits from parent by default) |
| `borderWidth` | `number` | `0.5` | Border width in pixels (0 for no border) |
| `className` | `string` | `undefined` | Additional CSS classes |
| `onClick` | `function` | `undefined` | Click handler for interactive badges |
| `onRemove` | `function` | `undefined` | Callback when close button is clicked |
| `closeIcon` | `React.ReactNode` | `'×'` | Custom close icon (use `currentColor` for SVGs to inherit badge color) |
| `closeIconSize` | `number` | `14` | Size of the close icon in pixels |

#### Examples

```tsx
// Basic usage
<Badge text="Status" />

// With variant
<Badge text="Priority" variant="outline" />

// Dark mode
<Badge text="Dark" mode="dark" />

// Ghost (no border)
<Badge text="Ghost" variant="outline" borderWidth={0} />

// Custom font
<Badge text="Custom" font="Arial" />

// Removable badge with default X icon
<Badge text="Tag" onRemove={() => console.log('removed')} />

// Removable badge with custom emoji
<Badge
  text="Tag"
  onRemove={() => console.log('removed')}
  closeIcon="🗑️"
  closeIconSize={12}
/>

// Removable badge with custom SVG icon (use currentColor to inherit badge color)
<Badge
  text="Tag"
  onRemove={() => console.log('removed')}
  closeIcon={
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M1 1L13 13M13 1L1 13" stroke="currentColor" strokeWidth="2"/>
    </svg>
  }
/>

// With icon library (e.g., Phosphor Icons - automatically inherits color)
import { X } from '@phosphor-icons/react';

<Badge
  text="Tag"
  onRemove={() => console.log('removed')}
  closeIcon={<X weight="bold" />}
  closeIconSize={16}
/>
```

### Utility Functions

#### `generateBadgeColorPairs(text: string)`

Generate color pairs for custom badge implementations.

```ts
import { generateBadgeColorPairs } from 'consistint';

const colors = generateBadgeColorPairs('example');
// Returns: { backgroundColor: '#...', textColor: '#...' }
```

#### `generateBadgeColors(text, mode)`

Generate complete color scheme with pastel colors.

```ts
import { generateBadgeColors } from 'consistint';

const colors = generateBadgeColors('example', 'light');
// Returns: { backgroundColor: '#...', borderColor: '#...', textColor: '#...' }
```

## 🎨 Variants

### Filled (Default)
Full background color with border and contrasting text.

```tsx
<Badge text="Filled" variant="filled" />
```

### Outline
Transparent background with colored border and text.

```tsx
<Badge text="Outline" variant="outline" />
```

### Ghost (No Border)
Transparent background with no border.

```tsx
<Badge text="Ghost" variant="outline" borderWidth={0} />
```

## 🛠️ Development

### Prerequisites

- Node.js 18+
- npm or yarn

### Setup

```bash
# Clone the repository
git clone https://github.com/propulsion-ai/badges.git
cd badges

# Install dependencies
npm install

# Run development server
npm run dev

# Run tests
npm test

# Build the library
npm run build

# Build demo site
npm run build:demo
```

### Project Structure

```
badges/
├── src/
│   ├── components/    # React components
│   ├── utils/         # Utility functions
│   └── types/         # TypeScript definitions
├── tests/             # Test files
├── examples/          # Usage examples
├── demo/              # Demo application
└── docs/              # Documentation
```

## 🧪 Testing

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Generate coverage report
npm run test:coverage
```

## 🚢 Deployment

The demo site is automatically deployed to GitHub Pages when changes are pushed to the main branch.

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Credits

Developed with ❤️ by [Propulsion AI](https://propulsion.ai)

Co-authored by [Claude](https://claude.ai) - AI assistant that helped architect, implement, and refine the library's pastel color generation system and overall structure.

## 🎨 Color Playground

Visit our [interactive Color Playground](https://propulsion-ai.github.io/badges/) to customize the pastel color parameters to your liking. The playground allows you to:

- Adjust saturation and lightness for backgrounds, borders, and text
- Preview changes in real-time with multiple sample badges
- Toggle between light and dark modes
- Export your custom color settings for use in your own projects

### Default Color Values

**Light Mode:**
- Background: 100% saturation, 95% lightness
- Border: 50% saturation, 85% lightness
- Text: 90% saturation, 33% lightness

**Dark Mode:**
- Background: 100% saturation, 17% lightness
- Border: 80% saturation, 29% lightness
- Text: 70% saturation, 84% lightness

## 🔗 Links

- [Demo & Color Playground](https://propulsion-ai.github.io/badges/)
- [npm Package](https://www.npmjs.com/package/consistint)
- [GitHub Repository](https://github.com/propulsion-ai/badges)
- [Issue Tracker](https://github.com/propulsion-ai/badges/issues)

## 📈 Stats

![npm downloads](https://img.shields.io/npm/dm/consistint.svg)
![bundle size](https://img.shields.io/bundlephobia/minzip/consistint)
![GitHub stars](https://img.shields.io/github/stars/propulsion-ai/badges)

---

<p align="center">Made with ⚡ by Propulsion AI</p>
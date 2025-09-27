# Badge Generator

[![CI](https://github.com/propulsion-ai/badges/actions/workflows/ci.yml/badge.svg)](https://github.com/propulsion-ai/badges/actions/workflows/ci.yml)
[![npm version](https://img.shields.io/npm/v/badge-generator.svg)](https://www.npmjs.com/package/badge-generator)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18%2B-61dafb.svg)](https://reactjs.org/)

A lightweight React component library for creating beautiful, auto-colored badges with consistent color generation based on text content.

## ✨ Features

- 🎨 **Pastel Color Palette** - Beautiful, consistent pastel colors from text
- 🎭 **Two Variants** - Filled (with background) and Outline styles
- 🌓 **Dark Mode Support** - Built-in light/dark mode with optimized colors
- 🔤 **Inter Font Default** - Clean, modern font with customization options
- 🔧 **TypeScript Support** - Full type safety and IntelliSense support
- ⚡ **Lightweight** - Minimal dependencies, optimized bundle size
- 🎯 **Consistent** - Same text always generates the same color

## 📦 Installation

```bash
npm install badge-generator
# or
yarn add badge-generator
# or
pnpm add badge-generator
```

## 🚀 Quick Start

```tsx
import { Badge } from 'badge-generator';

function App() {
  return (
    <div>
      <Badge text="New Feature" />
      <Badge text="Bug Fix" variant="outline" />
      <Badge text="Documentation" mode="dark" />
      <Badge text="Beta" borderWidth={0} />
    </div>
  );
}
```

## 📖 Documentation

### Badge Component

The main component for rendering badges with pastel colors.

#### Default Styles
- **Padding**: `2px 5px`
- **Border Radius**: `5px`
- **Border Width**: `0.5px`
- **Font**: Inter (400 weight)
- **Font Size**: `12px`
- **Line Height**: `15px`

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `text` | `string` | *required* | The text to display in the badge |
| `variant` | `'filled' \| 'outline'` | `'filled'` | Visual style variant |
| `mode` | `'light' \| 'dark'` | `'light'` | Color mode for the badge |
| `font` | `string` | `'Inter'` | Font family to use |
| `borderWidth` | `number` | `0.5` | Border width in pixels (0 for no border) |
| `className` | `string` | `undefined` | Additional CSS classes |
| `onClick` | `function` | `undefined` | Click handler for interactive badges |

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
```

### Utility Functions

#### `generateBadgeColorPairs(text: string)`

Generate color pairs for custom badge implementations.

```ts
import { generateBadgeColorPairs } from 'badge-generator';

const colors = generateBadgeColorPairs('example');
// Returns: { backgroundColor: '#...', textColor: '#...' }
```

#### `generateBadgeColors(text, mode)`

Generate complete color scheme with pastel colors.

```ts
import { generateBadgeColors } from 'badge-generator';

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

## 🔗 Links

- [Demo](https://propulsion-ai.github.io/badges/)
- [npm Package](https://www.npmjs.com/package/badge-generator)
- [GitHub Repository](https://github.com/propulsion-ai/badges)
- [Issue Tracker](https://github.com/propulsion-ai/badges/issues)

## 📈 Stats

![npm downloads](https://img.shields.io/npm/dm/badge-generator.svg)
![bundle size](https://img.shields.io/bundlephobia/minzip/badge-generator)
![GitHub stars](https://img.shields.io/github/stars/propulsion-ai/badges)

---

<p align="center">Made with ⚡ by Propulsion AI</p>
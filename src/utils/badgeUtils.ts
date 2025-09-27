import { getColorFromText, generatePastelColors } from './colorMapper';
import { BadgeVariant, BadgeMode, BadgeConfig, ColorScheme, ColorParameters } from '../types/types';

/**
 * Generate badge color scheme from text with optional custom parameters
 */
export function generateBadgeColors(
  text: string,
  mode: BadgeMode = 'light',
  colorParams?: ColorParameters
): ColorScheme {
  const baseColor = getColorFromText(text);
  return generatePastelColors(baseColor, mode, colorParams);
}

/**
 * Apply variant-specific styling
 */
export function getBadgeStyles(
  colors: ColorScheme,
  variant: BadgeVariant = 'filled',
  config: BadgeConfig = {}
): React.CSSProperties {
  const { font, fontSize, fontWeight, borderWidth = 0.5 } = config;

  const baseStyles: React.CSSProperties = {
    boxSizing: 'border-box',
    display: 'inline-flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2px 5px',
    gap: '10px',
    borderRadius: '5px',
    // Inherit typography by default, only set if explicitly provided
    ...(font && { fontFamily: font }),
    ...(fontSize && { fontSize }),
    ...(fontWeight && { fontWeight }),
    // Don't set font properties unless provided - inherit from parent
    fontStyle: 'inherit',
    lineHeight: 'inherit',
    flexShrink: 0,
    userSelect: 'none',
    transition: 'all 0.2s ease'
  };

  if (variant === 'outline' || variant === 'ghost') {
    return {
      ...baseStyles,
      backgroundColor: 'transparent',
      border: borderWidth > 0 ? `${borderWidth}px solid ${colors.borderColor}` : 'none',
      color: colors.textColor
    };
  }

  // Default 'filled' variant
  return {
    ...baseStyles,
    backgroundColor: colors.backgroundColor,
    border: borderWidth > 0 ? `${borderWidth}px solid ${colors.borderColor}` : 'none',
    color: colors.textColor
  };
}

// For backward compatibility
export function generateBadgeColorPairs(text: string) {
  const colors = generateBadgeColors(text);
  return {
    backgroundColor: colors.backgroundColor,
    textColor: colors.textColor
  };
}

export function getBadgeVariant(
  colors: { backgroundColor: string; textColor: string },
  variant?: 'solid' | 'outline' | 'ghost' | 'soft'
): React.CSSProperties {
  // Map old variants to new system
  const newVariant: BadgeVariant = (variant === 'outline' || variant === 'ghost') ? 'outline' : 'filled';
  const borderWidth = variant === 'ghost' ? 0 : 0.5;

  const colorScheme: ColorScheme = {
    backgroundColor: colors.backgroundColor,
    borderColor: colors.backgroundColor,
    textColor: colors.textColor
  };

  // Don't specify font to use default system font stack
  return getBadgeStyles(colorScheme, newVariant, { borderWidth });
}

export function isLightColor(color: string): boolean {
  const hex = color.replace('#', '');
  const r = parseInt(hex.substr(0, 2), 16);
  const g = parseInt(hex.substr(2, 2), 16);
  const b = parseInt(hex.substr(4, 2), 16);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance > 0.5;
}
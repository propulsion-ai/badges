import { getBadgeColor, getBadgeColorFromPalette } from "./colorMapper";
import { ThemeMode, BadgeColors } from "./types";

/**
 * Main utility function for generating badge colors from any string
 * This is the primary function you'd use in other projects
 */
export function generateBadgeColors(
  input: string, 
  options: {
    mode?: ThemeMode;
    usePalette?: boolean;
  } = {}
): BadgeColors {
  const { mode = "light", usePalette = false } = options;
  
  return usePalette 
    ? getBadgeColorFromPalette(input, mode)
    : getBadgeColor(input, mode);
}

/**
 * Generate CSS custom properties for a badge
 */
export function generateBadgeCSS(
  input: string,
  options: {
    mode?: ThemeMode;
    usePalette?: boolean;
    prefix?: string;
  } = {}
): string {
  const { mode = "light", usePalette = false, prefix = "--badge" } = options;
  const colors = generateBadgeColors(input, { mode, usePalette });
  
  return `
    ${prefix}-bg: ${colors.background};
    ${prefix}-border: ${colors.border};
    ${prefix}-text: ${colors.text};
  `.trim();
}

/**
 * Generate inline styles object for a badge
 */
export function generateBadgeStyles(
  input: string,
  options: {
    mode?: ThemeMode;
    usePalette?: boolean;
    additionalStyles?: React.CSSProperties;
  } = {}
): React.CSSProperties {
  const { mode = "light", usePalette = false, additionalStyles = {} } = options;
  const colors = generateBadgeColors(input, { mode, usePalette });
  
  return {
    backgroundColor: colors.background,
    borderColor: colors.border,
    color: colors.text,
    ...additionalStyles,
  };
}

/**
 * Batch generate colors for multiple inputs
 */
export function generateMultipleBadgeColors(
  inputs: string[],
  options: {
    mode?: ThemeMode;
    usePalette?: boolean;
  } = {}
): Record<string, BadgeColors> {
  const { mode = "light", usePalette = false } = options;
  
  return inputs.reduce((acc, input) => {
    acc[input] = generateBadgeColors(input, { mode, usePalette });
    return acc;
  }, {} as Record<string, BadgeColors>);
}

// Export everything for convenience
export * from "./colorMapper";
export * from "./types";
export { default as Badge } from "./Badge";
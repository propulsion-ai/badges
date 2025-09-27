import React from 'react';
import { generateBadgeColors, getBadgeStyles } from '../utils/badgeUtils';
import { BadgeVariant, BadgeMode, BadgeConfig, ColorScheme, ColorParameters } from '../types/types';

interface BadgeProps {
  text: string;
  variant?: BadgeVariant;
  mode?: BadgeMode;
  font?: string;
  borderWidth?: number;
  className?: string;
  onClick?: () => void;
  colors?: ColorScheme;  // Allow custom color scheme
  colorParams?: ColorParameters;  // Allow custom HSL parameters
}

export const Badge: React.FC<BadgeProps> = ({
  text,
  variant = 'filled',
  mode = 'light',
  font,
  borderWidth,
  className = '',
  onClick,
  colors: customColors,
  colorParams
}) => {
  // Ghost variant always has no border
  const effectiveBorderWidth = variant === 'ghost' ? 0 : (borderWidth ?? 0.5);

  // Use custom colors if provided, otherwise generate from text with optional parameters
  const colors = customColors || generateBadgeColors(text, mode, colorParams);
  const config: BadgeConfig = {};
  if (font) config.font = font;
  config.borderWidth = effectiveBorderWidth;
  const styles = getBadgeStyles(colors, variant, config);

  return (
    <span
      className={className}
      style={{
        ...styles,
        cursor: onClick ? 'pointer' : 'default',
        ...(onClick && { ':hover': { opacity: 0.9 } })
      }}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      {text}
    </span>
  );
};
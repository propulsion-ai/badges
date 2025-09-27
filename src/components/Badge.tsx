import React from 'react';
import { generateBadgeColors, getBadgeStyles } from '../utils/badgeUtils';
import { BadgeVariant, BadgeMode, BadgeConfig } from '../types/types';

interface BadgeProps {
  text: string;
  variant?: BadgeVariant;
  mode?: BadgeMode;
  font?: string;
  borderWidth?: number;
  className?: string;
  onClick?: () => void;
}

export const Badge: React.FC<BadgeProps> = ({
  text,
  variant = 'filled',
  mode = 'light',
  font,
  borderWidth = 0.5,
  className = '',
  onClick
}) => {
  const colors = generateBadgeColors(text, mode);
  const config: BadgeConfig = {};
  if (font) config.font = font;
  if (borderWidth !== undefined) config.borderWidth = borderWidth;
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
import React from 'react';
import { generateBadgeColors, getBadgeStyles } from '../utils/badgeUtils';
import { BadgeVariant, BadgeMode, BadgeConfig, ColorScheme, ColorParameters } from '../types/types';

interface BadgeProps {
  text: string;
  variant?: BadgeVariant;
  mode?: BadgeMode;
  font?: string;
  fontSize?: string | number;
  fontWeight?: string | number;
  borderWidth?: number;
  className?: string;
  onClick?: () => void;
  onRemove?: () => void;  // Callback when close button is clicked
  closeIcon?: React.ReactNode;  // Custom close icon (defaults to ×)
  closeIconSize?: number;  // Size of close icon in pixels (defaults to 14)
  colors?: ColorScheme;  // Allow custom color scheme
  colorParams?: ColorParameters;  // Allow custom HSL parameters
}

export const Badge: React.FC<BadgeProps> = ({
  text,
  variant = 'filled',
  mode = 'light',
  font,
  fontSize,
  fontWeight,
  borderWidth,
  className = '',
  onClick,
  onRemove,
  closeIcon = '×',
  closeIconSize = 14,
  colors: customColors,
  colorParams
}) => {
  // Ghost variant always has no border
  const effectiveBorderWidth = variant === 'ghost' ? 0 : (borderWidth ?? 0.5);

  // Use custom colors if provided, otherwise generate from text with optional parameters
  const colors = customColors || generateBadgeColors(text, mode, colorParams);
  const config: BadgeConfig = {};
  if (font) config.font = font;
  if (fontSize) config.fontSize = fontSize;
  if (fontWeight) config.fontWeight = fontWeight;
  config.borderWidth = effectiveBorderWidth;
  const styles = getBadgeStyles(colors, variant, config);

  const handleRemoveClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onRemove) {
      onRemove();
    }
  };

  return (
    <span
      className={className}
      style={{
        ...styles,
        cursor: onClick ? 'pointer' : 'default',
        display: 'inline-flex',
        alignItems: 'center',
        gap: onRemove ? '4px' : '0',
        ...(onClick && { ':hover': { opacity: 0.9 } })
      }}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      <span>{text}</span>
      {onRemove && (
        <button
          onClick={handleRemoveClick}
          style={{
            background: 'none',
            border: 'none',
            padding: 0,
            margin: 0,
            cursor: 'pointer',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: colors.textColor,
            opacity: 0.6,
            transition: 'opacity 0.15s ease',
            fontSize: `${closeIconSize}px`,
            lineHeight: '1',
            minWidth: `${closeIconSize}px`,
            minHeight: `${closeIconSize}px`,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.opacity = '1';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.opacity = '0.6';
          }}
          aria-label={`Remove ${text}`}
          type="button"
        >
          {closeIcon}
        </button>
      )}
    </span>
  );
};
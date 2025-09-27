export type ThemeMode = 'light' | 'dark';

export interface BadgeColors {
  background: string;
  border: string;
  text: string;
}

export interface BadgeProps {
  label: string;
  mode?: ThemeMode;
  className?: string;
  onClick?: () => void;
}

export interface ColorHashConfig {
  hue: { min: number; max: number };
  saturation: number[];
  lightness: number[];
}

export interface HSL {
  h: number;
  s: number;
  l: number;
}
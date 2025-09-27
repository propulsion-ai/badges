export type BadgeVariant = 'filled' | 'outline';
export type BadgeMode = 'light' | 'dark';

export interface BadgeConfig {
  font?: string;
  borderWidth?: number;
}

export interface ColorScheme {
  backgroundColor: string;
  borderColor: string;
  textColor: string;
}
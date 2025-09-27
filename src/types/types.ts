export type BadgeVariant = 'filled' | 'outline' | 'ghost';
export type BadgeMode = 'light' | 'dark';

export interface BadgeConfig {
  font?: string;
  fontSize?: string | number;
  fontWeight?: string | number;
  borderWidth?: number;
}

export interface ColorScheme {
  backgroundColor: string;
  borderColor: string;
  textColor: string;
}

export interface ColorParameters {
  light?: {
    backgroundSaturation?: number;
    backgroundLightness?: number;
    borderSaturation?: number;
    borderLightness?: number;
    textSaturation?: number;
    textLightness?: number;
  };
  dark?: {
    backgroundSaturation?: number;
    backgroundLightness?: number;
    borderSaturation?: number;
    borderLightness?: number;
    textSaturation?: number;
    textLightness?: number;
  };
}
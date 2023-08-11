export type ColorDefinition = {
  color: string;
  className: string;
};

export const colorPalette: Record<string, ColorDefinition> = {
  primary: { color: '#6DBE45', className: 'primary' },
  secondary: { color: '#F4A623', className: 'secondary' },
  background: { color: '#FFFFFF', className: 'background' },
  text: { color: '#333333', className: 'text' },
  accent1: { color: '#E71D36', className: 'accent1' },
  accent2: { color: '#FF9F1C', className: 'accent2' },
  accent3: { color: '#2EC4B6', className: 'accent3' },
  neutral1: { color: '#C0C0C0', className: 'neutral1' },
  neutral2: { color: '#E5E5E5', className: 'neutral2' },
};
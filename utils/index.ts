export const isProd = process.env.NODE_ENV === "production";

export function hexToRgb(hex: string): [number, number, number] {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return [r, g, b];
}

export function rgbToHex(r: number, g: number, b: number): string {
  return "#" + [r, g, b].map(x => {
    const hex = x.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  }).join("");
}

export function generateShadeScale(hexColor: string): object {
  const primary = hexToRgb(hexColor);
  const scale = { primary: { DEFAULT: hexColor } };
  const steps = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

  steps.forEach(step => {
    // This is a simplistic way to generate shades.
    // You might want to use a more sophisticated method for better results.
    const shade = primary.map(color => Math.max(0, Math.min(255, color + (step - 500) / 50)));
    scale.primary[step] = rgbToHex(shade[0], shade[1], shade[2]);
  });

  return scale;
}
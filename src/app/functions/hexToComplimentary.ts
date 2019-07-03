/* hexToComplimentary : Converts hex value to HSL, shifts
* hue by 180 degrees and then converts hex, giving complimentary color
* as a hex value
* @param  [String] hex : hex value
* @return [String] : complimentary color as hex value
*/
export function hexToComplimentary(hex: string): string {

  // Convert hex to rgb
  // Credit to Denis http://stackoverflow.com/a/36253499/4939630
  const rgbString = 'rgb(' +
    (hex = hex.replace('#', ''))
      .match(new RegExp('(.{' + hex.length / 3 + '})', 'g'))
      .map((le) => {
        return parseInt(hex.length % 2 ? le + le : le, 16);
      }).join(',') + ')';

  // Get array of RGB values
  const rgb = rgbString.replace(/[^\d,]/g, '').split(',');

  let r: any = rgb[0];
  let g: any = rgb[1];
  let b: any = rgb[2];

  // Convert RGB to HSL
  // Adapted from answer by 0x000f http://stackoverflow.com/a/34946092/4939630
  r /= 255.0;
  g /= 255.0;
  b /= 255.0;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h: any;
  let s: any;
  const l = (max + min) / 2.0;

  if (max === min) {
    h = s = 0;  // achromatic
  } else {
    const d: number = max - min;
    s = (l > 0.5 ? d / (2.0 - max - min) : d / (max + min));

    if (max === r && g >= b) {
      h = 1.0472 * (g - b) / d;
    } else if (max === r && g < b) {
      h = 1.0472 * (g - b) / d + 6.2832;
    } else if (max === g) {
      h = 1.0472 * (b - r) / d + 2.0944;
    } else if (max === b) {
      h = 1.0472 * (r - g) / d + 4.1888;
    }
  }

  h = h / 6.2832 * 360.0 + 0;

  // Shift hue to opposite side of wheel and convert to [0-1] value
  h += 180;
  if (h > 360) { h -= 360; }
  h /= 360;

  // Convert h s and l values into r g and b values
  // Adapted from answer by Mohsen http://stackoverflow.com/a/9493060/4939630
  if (s === 0) {
    r = g = b = l; // achromatic
  } else {
    const hue2rgb = (pe: number, qe: number, t: number) => {
      if (t < 0) { t += 1; }
      if (t > 1) { t -= 1; }
      if (t < 1 / 6) { return pe + (qe - pe) * 6 * t; }
      if (t < 1 / 2) { return qe; }
      if (t < 2 / 3) { return pe + (qe - pe) * (2 / 3 - t) * 6; }
      return pe;
    };

    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;

    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }

  r = Math.round(r * 255);
  g = Math.round(g * 255);
  b = Math.round(b * 255);

  // Convert r b and g values to hex
  const rgbNumber = b | (g << 8) | (r << 16);
  return '#' + (0x1000000 | rgbNumber).toString(16).substring(1);
}

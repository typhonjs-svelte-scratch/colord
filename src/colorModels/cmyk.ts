import { RgbaColor, InputObject, CmykaColor } from "../types";
import { ALPHA_PRECISION } from "../constants";
import { clamp, isPresent, round } from "../helpers";

/**
 * Clamps the CMYK color object values.
 */
export const clampCmyka = (cmyka: CmykaColor): CmykaColor => ({
  c: clamp(cmyka.c, 0, 100),
  m: clamp(cmyka.m, 0, 100),
  y: clamp(cmyka.y, 0, 100),
  k: clamp(cmyka.k, 0, 100),
  a: clamp(cmyka.a),
});

/**
 * Rounds the CMYK color object values.
 */
export const roundCmyka = (cmyka: CmykaColor, digits = 2): CmykaColor => ({
  c: round(cmyka.c, digits),
  m: round(cmyka.m, digits),
  y: round(cmyka.y, digits),
  k: round(cmyka.k, digits),
  a: round(cmyka.a, ALPHA_PRECISION > digits ? ALPHA_PRECISION : digits),
});

/**
 * Transforms the CMYK color object to RGB.
 * https://www.rapidtables.com/convert/color/cmyk-to-rgb.html
 */
export function cmykaToRgba(cmyka: CmykaColor): RgbaColor {
  return {
    r: round(255 * (1 - cmyka.c / 100) * (1 - cmyka.k / 100)),
    g: round(255 * (1 - cmyka.m / 100) * (1 - cmyka.k / 100)),
    b: round(255 * (1 - cmyka.y / 100) * (1 - cmyka.k / 100)),
    a: cmyka.a,
  };
}

/**
 * Convert RGB Color Model object to CMYK.
 * https://www.rapidtables.com/convert/color/rgb-to-cmyk.html
 */
export function rgbaToCmyka(rgba: RgbaColor): CmykaColor {
  const k = 1 - Math.max(rgba.r / 255, rgba.g / 255, rgba.b / 255);
  const c = (1 - rgba.r / 255 - k) / (1 - k);
  const m = (1 - rgba.g / 255 - k) / (1 - k);
  const y = (1 - rgba.b / 255 - k) / (1 - k);

  return {
    c: isNaN(c) ? 0 : round(c * 100),
    m: isNaN(m) ? 0 : round(m * 100),
    y: isNaN(y) ? 0 : round(y * 100),
    k: round(k * 100),
    a: rgba.a,
  };
}

/**
 * Parses the CMYK color object into RGB.
 */
export function parseCmyka({ c, m, y, k, a = 1 }: InputObject): RgbaColor | null {
  if (!isPresent(c) || !isPresent(m) || !isPresent(y) || !isPresent(k)) return null;

  const cmyk = clampCmyka({
    c: Number(c),
    m: Number(m),
    y: Number(y),
    k: Number(k),
    a: Number(a),
  });

  return cmykaToRgba(cmyk);
}

import { InputObject, RgbaColor, HsvaColor } from "../types";
import { ALPHA_PRECISION } from "../constants";
import { clamp, clampHue, isPresent, round } from "../helpers";

export const clampHsva = (hsva: HsvaColor): HsvaColor => ({
  h: clampHue(hsva.h),
  s: clamp(hsva.s, 0, 100),
  v: clamp(hsva.v, 0, 100),
  a: clamp(hsva.a),
});

export const roundHsva = (hsva: HsvaColor, digits = 0): HsvaColor => ({
  h: round(hsva.h, digits),
  s: round(hsva.s, digits),
  v: round(hsva.v, digits),
  a: round(hsva.a, ALPHA_PRECISION > digits ? ALPHA_PRECISION : digits),
});

export const parseHsva = ({ h, s, v, a = 1 }: InputObject): RgbaColor | null => {
  if (!isPresent(h) || !isPresent(s) || !isPresent(v)) return null;

  const hsva = clampHsva({
    h: Number(h),
    s: Number(s),
    v: Number(v),
    a: Number(a),
  });

  return hsvaToRgba(hsva);
};

export const rgbaToHsva = ({ r, g, b, a }: RgbaColor): HsvaColor => {
  const max = Math.max(r, g, b);
  const delta = max - Math.min(r, g, b);

  const hh = delta
    ? max === r
      ? (g - b) / delta
      : max === g
      ? 2 + (b - r) / delta
      : 4 + (r - g) / delta
    : 0;

  return {
    h: 60 * (hh < 0 ? hh + 6 : hh),
    s: max ? (delta / max) * 100 : 0,
    v: (max / 255) * 100,
    a,
  };
};

export const hsvaToRgba = ({ h, s, v, a }: HsvaColor): RgbaColor => {
  h = (h / 360) * 6;
  s = s / 100;
  v = v / 100;

  const hh = Math.floor(h),
    b = v * (1 - s),
    c = v * (1 - (h - hh) * s),
    d = v * (1 - (1 - h + hh) * s),
    module = hh % 6;

  return {
    r: [v, c, b, b, d, v][module] * 255,
    g: [d, v, v, c, b, b][module] * 255,
    b: [b, b, d, v, v, c][module] * 255,
    a: a,
  };
};

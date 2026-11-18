/* Wall recolouring: replaces only the wall pixels of a room photo with a chosen
   colour while keeping the photo's light, shadow and texture. Shared by the hero
   and the colour studio; each supplies its own WallConfig. */

export type Rgb = [number, number, number];

export interface WallConfig {
  /** Draws the wall area in white and cut-outs with destination-out onto the mask canvas. */
  drawMask: (ctx: CanvasRenderingContext2D, width: number, height: number) => void;
  /** 0..1: how much a pixel looks like wall paint (filters out objects inside the outline). */
  classify: (r: number, g: number, b: number) => number;
  /** Exponent applied to the pixel's relative brightness, by target colour luminance (0..1). */
  gamma: (targetLuminance: number) => number;
  /** Added to each pixel's luma before normalising. */
  lumaOffset?: number;
  /** Upper limit for the relative brightness multiplier. */
  shadeCap?: number;
}

export interface WallData {
  width: number;
  height: number;
  original: ImageData;
  /** Pixel indices that belong to the wall. */
  indices: number[];
  /** Per wall pixel blend strength, 0..1. */
  alpha: number[];
  /** Per wall pixel brightness relative to the wall average. */
  shade: number[];
}

export const hexToRgb = (hex: string): Rgb => {
  const h = hex.replace("#", "");
  return [
    parseInt(h.slice(0, 2), 16),
    parseInt(h.slice(2, 4), 16),
    parseInt(h.slice(4, 6), 16),
  ];
};

/** Perceived luminance, 0..1. */
export const luminance = (c: Rgb) => (0.299 * c[0] + 0.587 * c[1] + 0.114 * c[2]) / 255;

export const smoothstep = (edge0: number, edge1: number, x: number) => {
  const t = Math.min(1, Math.max(0, (x - edge0) / (edge1 - edge0)));
  return t * t * (3 - 2 * t);
};

/** Reads the photo and works out which pixels are wall and how bright each is. */
export const buildWallData = (img: HTMLImageElement, config: WallConfig): WallData => {
  const width = img.naturalWidth;
  const height = img.naturalHeight;

  const photo = document.createElement("canvas");
  photo.width = width;
  photo.height = height;
  const photoCtx = photo.getContext("2d", { willReadFrequently: true })!;
  photoCtx.drawImage(img, 0, 0);
  const original = photoCtx.getImageData(0, 0, width, height);
  const px = original.data;

  const mask = document.createElement("canvas");
  mask.width = width;
  mask.height = height;
  const maskCtx = mask.getContext("2d", { willReadFrequently: true })!;
  config.drawMask(maskCtx, width, height);
  const maskPx = maskCtx.getImageData(0, 0, width, height).data;

  const lumaOffset = config.lumaOffset ?? 0;
  const indices: number[] = [];
  const alpha: number[] = [];
  const luma: number[] = [];
  let sum = 0;
  let count = 0;

  for (let p = 0; p < width * height; p++) {
    const maskAlpha = maskPx[p * 4 + 3] / 255;
    if (maskAlpha <= 0.02) continue;
    const k = p * 4;
    const r = px[k];
    const g = px[k + 1];
    const b = px[k + 2];
    const a = maskAlpha * config.classify(r, g, b);
    if (a <= 0.02) continue;
    const l = 0.299 * r + 0.587 * g + 0.114 * b + lumaOffset;
    indices.push(p);
    alpha.push(a);
    luma.push(l);
    if (a > 0.9) {
      sum += l;
      count++;
    }
  }

  const average = sum / (count || 1);
  return { width, height, original, indices, alpha, shade: luma.map((l) => l / average) };
};

/** Paints the wall in `hex` onto `ctx` (a canvas the same size as the photo). */
export const renderWall = (
  ctx: CanvasRenderingContext2D,
  data: WallData,
  hex: string,
  config: WallConfig
) => {
  const target = hexToRgb(hex);
  const gamma = config.gamma(luminance(target));
  const cap = config.shadeCap ?? Infinity;
  const out = new ImageData(
    new Uint8ClampedArray(data.original.data),
    data.width,
    data.height
  );
  const o = out.data;
  const d = data.original.data;

  for (let q = 0; q < data.indices.length; q++) {
    const k = data.indices[q] * 4;
    const a = data.alpha[q];
    const s = Math.min(cap, Math.pow(data.shade[q], gamma));
    o[k] = d[k] * (1 - a) + Math.min(255, target[0] * s) * a;
    o[k + 1] = d[k + 1] * (1 - a) + Math.min(255, target[1] * s) * a;
    o[k + 2] = d[k + 2] * (1 - a) + Math.min(255, target[2] * s) * a;
  }
  ctx.putImageData(out, 0, 0);
};

import { smoothstep, type WallConfig } from "./wallPaint";

export const HERO_ROOM_IMAGE = "/assets/images/hero/room-hero.jpg";

type Point = number[];

/* Hand-traced for room-hero.jpg (1280x853): the wall plane minus the objects in front of it. */
const lamps = {
  leftShade: [160, 271, 252, 271, 256, 334, 156, 334],
  leftBase: [208, 371, 31, 38],
  leftNeck: [195, 332, 221, 344],
  leftVase: [138, 392, 21, 19],
  leftBowl: [172, 403, 23, 8],
  leftStand: [100, 402, 272, 545],
  rightShade: [697, 289, 764, 289, 768, 336, 693, 336],
  rightBase: [731, 365, 23, 31],
  rightNeck: [721, 334, 741, 342],
  rightVase: [774, 383, 13, 11],
  rightStand: [674, 388, 790, 545],
};

const drawHeroMask: WallConfig["drawMask"] = (ctx) => {
  const poly = (pts: Point) => {
    ctx.beginPath();
    ctx.moveTo(pts[0], pts[1]);
    for (let i = 2; i < pts.length; i += 2) ctx.lineTo(pts[i], pts[i + 1]);
    ctx.closePath();
    ctx.fill();
  };
  const rect = ([x0, y0, x1, y1]: Point) => ctx.fillRect(x0, y0, x1 - x0, y1 - y0);
  const ellipse = ([cx, cy, rx, ry]: Point) => {
    ctx.beginPath();
    ctx.ellipse(cx, cy, rx, ry, 0, 0, Math.PI * 2);
    ctx.fill();
  };

  ctx.filter = "blur(0.8px)";
  ctx.fillStyle = "#fff";
  poly([91, 0, 150, 0, 783, 100, 783, 540, 91, 540]);
  ctx.globalCompositeOperation = "destination-out";
  poly([314, 82, 632, 121, 632, 292, 314, 287]); // painting
  poly([272, 545, 272, 404, 279, 404, 279, 311, 282, 303, 290, 299, 657, 299, 663, 303, 665, 311, 665, 386, 678, 386, 678, 545]); // headboard and bed
  poly(lamps.leftShade);
  ellipse(lamps.leftBase);
  rect(lamps.leftNeck);
  ellipse(lamps.leftVase);
  ellipse(lamps.leftBowl);
  rect(lamps.leftStand);
  poly(lamps.rightShade);
  ellipse(lamps.rightBase);
  rect(lamps.rightNeck);
  ellipse(lamps.rightVase);
  rect(lamps.rightStand);
};

/** Keeps only warm beige wall pixels inside the outline (drops plant leaves and stray highlights). */
const classifyHeroWall: WallConfig["classify"] = (r, g, b) => {
  const red = r || 1;
  const gr = g / red;
  const br = b / red;
  return (
    smoothstep(0.66, 0.72, gr) *
    (1 - smoothstep(0.92, 0.96, gr)) *
    smoothstep(0.36, 0.43, br) *
    (1 - smoothstep(0.84, 0.9, br))
  );
};

export const HERO_WALL_CONFIG: WallConfig = {
  drawMask: drawHeroMask,
  classify: classifyHeroWall,
  gamma: (lt) => (lt > 0.7 ? 0.55 : lt > 0.4 ? 0.8 : 1),
};

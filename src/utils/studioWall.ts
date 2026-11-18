import { smoothstep, type WallConfig } from "./wallPaint";

export const STUDIO_ROOM_IMAGE = "/assets/images/colour/room-living.jpg";

/* room-living.jpg is 1280x720 with three deep-blue walls. */
const drawStudioMask: WallConfig["drawMask"] = (ctx, width, height) => {
  ctx.fillStyle = "#fff";
  ctx.fillRect(0, 0, width, height);
  ctx.filter = "blur(0.8px)";
  ctx.globalCompositeOperation = "destination-out";
  ctx.fillRect(479, 142, 333, 225); // painting: it contains blue too
  ctx.fillRect(35, 172, 210, 490); // left bookshelf (blue book spines)
  ctx.fillRect(1049, 172, 212, 490); // right bookshelf
};

/** The walls are a deep blue: blue well above red, red low. Wood, ceiling, floor and the lamp shade are not. */
const classifyStudioWall: WallConfig["classify"] = (r, g, b) =>
  smoothstep(5, 22, b - r) * (b + 6 >= g ? 1 : 0) * (1 - smoothstep(60, 90, r));

export const STUDIO_WALL_CONFIG: WallConfig = {
  drawMask: drawStudioMask,
  classify: classifyStudioWall,
  gamma: (lt) => (lt > 0.7 ? 0.5 : lt > 0.4 ? 0.62 : 0.8),
  lumaOffset: 2,
  shadeCap: 1.6,
};

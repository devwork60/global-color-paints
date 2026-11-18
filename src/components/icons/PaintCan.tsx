interface PaintCanProps {
  /** Colour of the label band. */
  color: string;
  /** Width as a percentage of the parent. */
  width: number;
}

/** Simple paint-can illustration used for the pack-size comparison. */
const PaintCan = ({ color, width }: PaintCanProps) => (
  <svg
    viewBox="0 0 120 130"
    style={{ width: `${width}%` }}
    className="block h-auto transition-transform duration-[400ms] ease-brand"
    aria-hidden="true"
  >
    <path d="M30 18 Q60 -6 90 18" fill="none" stroke="#262322" strokeWidth="3" />
    <ellipse cx="60" cy="24" rx="46" ry="10" fill="#E4DDD3" />
    <path d="M14 24 L22 118 Q60 130 98 118 L106 24 Q60 36 14 24Z" fill="#F6F3EE" stroke="#E4DDD3" />
    <path d="M18 58 L104 58 L100 98 L20 98Z" fill={color} />
  </svg>
);

export default PaintCan;

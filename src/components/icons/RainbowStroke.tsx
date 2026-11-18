/** Hand-drawn rainbow underline. Draws itself left to right when an ancestor `group/rv` becomes visible. */
const RainbowStroke = () => (
  <svg
    viewBox="0 0 1200 40"
    preserveAspectRatio="none"
    aria-hidden="true"
    className="absolute bottom-0 left-0 h-[22px] w-full overflow-visible"
  >
    <defs>
      <linearGradient id="about-rainbow" x1="0" x2="1">
        <stop offset="0" stopColor="#E5352B" />
        <stop offset=".2" stopColor="#F28C28" />
        <stop offset=".4" stopColor="#F7D038" />
        <stop offset=".6" stopColor="#6CBF4B" />
        <stop offset=".8" stopColor="#1FA7E0" />
        <stop offset="1" stopColor="#1B5FC1" />
      </linearGradient>
    </defs>
    <path
      d="M6 26C190 10 330 34 560 22S960 8 1194 20"
      pathLength="1"
      fill="none"
      stroke="url(#about-rainbow)"
      strokeWidth="7"
      strokeLinecap="round"
      strokeDasharray="1"
      className="[stroke-dashoffset:1] [transition:stroke-dashoffset_1.9s_cubic-bezier(.2,.7,.2,1)_.35s] group-data-[in=true]/rv:[stroke-dashoffset:0]"
    />
  </svg>
);

export default RainbowStroke;

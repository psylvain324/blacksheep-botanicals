interface WaveDividerProps {
  color: string;
  flip?: boolean;
}

const colorMap: Record<string, string> = {
  "earth-linen": "#F5F0E6",
  "earth-cream": "#F0EADC",
  "earth-green-dark": "#2D4A3E",
  "earth-brown": "#3E2B1C",
};

export default function WaveDivider({ color, flip = false }: WaveDividerProps) {
  const fill = colorMap[color] || "#F5F0E6";

  return (
    <div
      className="w-full leading-[0] overflow-hidden"
      style={{ transform: flip ? "rotate(180deg)" : undefined }}
    >
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="w-full h-[60px] sm:h-[80px] md:h-[100px] block"
      >
        <path
          d="M0,60 C240,120 480,0 720,60 C960,120 1200,0 1440,60 L1440,120 L0,120 Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}

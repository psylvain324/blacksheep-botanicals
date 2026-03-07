const shadowByColor: Record<string, string> = {
  "earth-cream":
    "0 3px 12px rgba(45, 74, 62, 0.06), 0 1px 4px rgba(62, 43, 28, 0.04)",
  "earth-linen":
    "0 3px 12px rgba(45, 74, 62, 0.07), 0 1px 4px rgba(184, 92, 56, 0.05)",
  "earth-green-dark":
    "0 3px 14px rgba(0, 0, 0, 0.12), 0 1px 4px rgba(45, 74, 62, 0.2)",
  "earth-brown":
    "0 3px 14px rgba(0, 0, 0, 0.15), 0 1px 4px rgba(62, 43, 28, 0.2)",
};

interface SectionDividerProps {
  /** Next section background - shadow tint matches color scheme */
  color?: "earth-cream" | "earth-linen" | "earth-green-dark" | "earth-brown";
}

export default function SectionDivider({ color = "earth-cream" }: SectionDividerProps) {
  const shadow = shadowByColor[color] ?? shadowByColor["earth-cream"];
  return (
    <div
      className="w-full h-[2px] bg-gradient-to-r from-transparent via-earth-green/20 to-transparent"
      style={{ boxShadow: shadow }}
      aria-hidden
    />
  );
}

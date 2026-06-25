"use client";

import { useEffect, useState } from "react";

interface Petal {
  id: number;
  left: string;
  delay: string;
  duration: string;
  size: number;
  rotate: number;
  color: string;
}

const PETAL_COLORS = [
  "rgba(244,155,181,0.5)",
  "rgba(230,61,110,0.35)",
  "rgba(249,197,214,0.45)",
  "rgba(224,188,106,0.3)",
];

function PetalSVG({ color, size, rotate }: { color: string; size: number; rotate: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      <ellipse cx="20" cy="20" rx="8" ry="18" fill={color} />
      <ellipse cx="20" cy="20" rx="18" ry="8" fill={color} opacity="0.5" />
    </svg>
  );
}

export default function FloatingPetals() {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    const generated: Petal[] = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 10}s`,
      duration: `${8 + Math.random() * 10}s`,
      size: 10 + Math.floor(Math.random() * 16),
      rotate: Math.floor(Math.random() * 360),
      color: PETAL_COLORS[Math.floor(Math.random() * PETAL_COLORS.length)],
    }));
    setPetals(generated);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {petals.map((p) => (
        <div
          key={p.id}
          className="petal"
          style={{
            left: p.left,
            top: `-${p.size}px`,
            animationDuration: p.duration,
            animationDelay: p.delay,
          }}
        >
          <PetalSVG color={p.color} size={p.size} rotate={p.rotate} />
        </div>
      ))}
    </div>
  );
}

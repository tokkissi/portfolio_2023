"use client";

import React from "react";
import { useState } from "react";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";

export default function Carousel({ children }: { children: React.ReactNode }) {
  const [active, setActive] = useState(0);
  const count = React.Children.count(children);

  return (
    <div
      className="relative w-full h-64 overflow-hidden"
      style={{
        perspective: `500px`,
        transformStyle: `preserve-3d`,
      }}
    >
      {active > 0 && (
        <button
          className="absolute top-1/2 -translate-y-1/2 z-30 cursor-pointer select-none"
          style={{
            transform: `translateX(130%) translatey(-80%)`,
          }}
          onClick={() => setActive((i) => i - 1)}
        >
          <FaChevronCircleLeft className="text-[#E197A1]/80 hover:text-[#9BDEAC]/80 text-6xl" />
        </button>
      )}
      {React.Children.map(children, (child, i) => {
        const isActive = i === active;
        return (
          <div
            className="select-none absolute w-full h-full transition-all duration-300 ease-out"
            style={{
              transform: `rotateY(${(active - i) * 50}deg) scaleY(${
                1 + Math.abs(active - i) * -0.4
              }) translateZ(${Math.abs(active - i) * -30}rem) translateX(${
                Math.sign(active - i) * -5
              }rem)`,
              filter: `blur(${Math.abs(active - i)}rem)`,
              zIndex: isActive ? 25 : 20 - Math.abs(active - i),
            }}
          >
            {child}
          </div>
        );
      })}
      {active < count - 1 && (
        <button
          className="absolute top-1/2 -translate-y-1/2 right-0 z-30 cursor-pointer select-none"
          style={{
            transform: `translateX(-130%) translatey(-80%)`,
          }}
          onClick={() => setActive((i) => i + 1)}
        >
          <FaChevronCircleRight className="text-[#E197A1]/80 hover:text-[#9BDEAC]/80 text-6xl" />
        </button>
      )}
    </div>
  );
}

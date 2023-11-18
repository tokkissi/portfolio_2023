"use client";

import Image from "next/image";
import React from "react";

export default function NavigationBar() {
  /**  스크롤 이동 함수 */
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="flex justify-between items-center sticky bg-[#eee] top-0 mb-4 z-50 h-10 w-full">
      {/* 좌측 배너 */}
      <div>
        <a href="/">
          <Image
            alt="토끼씨 로고"
            src={"/images/토끼씨-로고-배경제거.png"}
            height={50}
            width={50}
          />
        </a>
      </div>
      {/* 우측 네비게이션 */}
      <div className="flex gap-4 font-bold">
        <a href="#about">{"< About />"}</a>
        <a href="#main-skills">{"< Main Skills />"}</a>
        <a href="#contact">{"< Contact />"}</a>
      </div>
    </nav>
  );
}

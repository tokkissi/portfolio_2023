"use client";

import React, { useEffect, useState } from "react";
import "./typingEffect.css";

type TypingEffectProps = {
  text: string; // 전체 텍스트
  highlightText: string; // 하이라이트 할 텍스트
};

export default function TypingEffect({
  text,
  highlightText,
}: TypingEffectProps) {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const typingDelay = 80;
  const deletingDelay = 30;

  // 타이핑 애니메이션을 위한 steps 함수의 인자를 문자열의 길이에 맞춤
  const typingSteps = text.length; // 텍스트의 전체 길이로 설정

  useEffect(() => {
    let timer: NodeJS.Timeout;

    // 타이핑 중이고 텍스트가 아직 전체 길이에 도달하지 않았다면
    if (!isDeleting && displayText.length < text.length) {
      timer = setTimeout(() => {
        setDisplayText(text.substring(0, displayText.length + 1));
      }, typingDelay);
    }
    // 타이핑이 끝났고 삭제 상태로 전환을 기다리고 있다면
    else if (!isDeleting && displayText.length === text.length) {
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, 1500); // 잠시 후에 삭제 상태로 전환
    }
    // 삭제 중이고 텍스트가 아직 남아 있다면
    else if (isDeleting && displayText.length > 0) {
      timer = setTimeout(() => {
        setDisplayText(text.substring(0, displayText.length - 1));
      }, deletingDelay);
    }
    // 모든 텍스트를 삭제했다면 타이핑 상태로 전환
    else if (isDeleting && displayText.length === 0) {
      setIsDeleting(false);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [text, displayText, isDeleting]);

  return (
    <div
      className={`typing-effect ${isDeleting ? "deleting" : ""}`}
      style={{
        animation: `typing 3.5s steps(${typingSteps}, end), blink-caret .75s step-end infinite`,
      }}
    >
      {displayText
        .split(new RegExp(`(${highlightText})`, "g")) // 하이라이트 텍스트를 기준으로 분할.
        .map((part, i) =>
          part === highlightText ? (
            <span key={i} className="highlight">
              {part}
            </span> // 하이라이트 텍스트에 대해 span 적용
          ) : (
            part // 그 외의 텍스트는 그대로 렌더링
          )
        )}
    </div>
  );
}

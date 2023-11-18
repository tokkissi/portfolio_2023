"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./ProgressBar.module.css";

type ProgressBarProps = {
  percentage: number;
  animationDuration: number;
};

export default function ProgressBar({
  percentage,
  animationDuration,
}: ProgressBarProps) {
  const [counter, setCounter] = useState(0);
  const fullDasharray = 2 * Math.PI * 35; // 반지름 70으로 원 둘레 구하기
  const [dashoffset, setDashoffset] = useState(fullDasharray); // counter 값에 따라 dashoffset을 계산하여, 원이 채워지는 비율을 counter의 값과 동기화하여 업데이트함
  const progressBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const intervalDuration = animationDuration / percentage;
    const incrementPerInterval =
      percentage / (animationDuration / intervalDuration);

    let progressBarElement = progressBarRef.current; // ref에서 요소를 변수에 복사

    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const interval = setInterval(() => {
            setCounter((prevCounter) => {
              const nextCounter = prevCounter + incrementPerInterval;
              setDashoffset(
                fullDasharray - fullDasharray * (nextCounter / 100)
              );

              if (nextCounter >= percentage) {
                clearInterval(interval);
                return percentage;
              }
              return nextCounter;
            });
          }, intervalDuration);

          return () => clearInterval(interval);
        }
      },
      { threshold: 0.85 }
    );

    if (progressBarElement) {
      intersectionObserver.observe(progressBarElement);
    }

    return () => {
      if (progressBarElement) {
        intersectionObserver.unobserve(progressBarElement);
      }
      intersectionObserver.disconnect();
    };
  }, [percentage, fullDasharray, animationDuration]);

  return (
    <>
      <div ref={progressBarRef} className={styles.skill}>
        <div className={styles.outer}>
          <div className={styles.inner}>
            <div className={styles.number}>{Math.round(counter)}%</div>
          </div>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          width="80px"
          height="80px"
          className={styles.localSvg}
        >
          <defs>
            <linearGradient id="GradientColor">
              <stop offset="0%" stopColor="#e91e63" />
              <stop offset="100%" stopColor="#673ab7" />
            </linearGradient>
          </defs>
          <circle
            className={styles.localCircle}
            cx="40"
            cy="40"
            r="35"
            strokeLinecap="round"
            strokeDasharray={fullDasharray}
            strokeDashoffset={dashoffset}
          />
        </svg>
      </div>
    </>
  );
}

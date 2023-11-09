"use client";

import { useEffect, useState } from "react";
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
  const fullDasharray = 2 * Math.PI * 70; // 반지름 70으로 원 둘레 구하기
  const [dashoffset, setDashoffset] = useState(fullDasharray); // counter 값에 따라 dashoffset을 계산하여, 원이 채워지는 비율을 counter의 값과 동기화하여 업데이트함

  useEffect(() => {
    // 각 percentage 증가마다 걸리는 시간을 계산
    const intervalDuration = animationDuration / percentage;
    const incrementPerInterval =
      percentage / (animationDuration / intervalDuration); // 각 interval에서 증가시킬 counter 값

    const interval = setInterval(() => {
      setCounter((prevCounter) => {
        const nextCounter = prevCounter + incrementPerInterval;
        // counter 상태와 동기화하여 stroke-dashoffset도 업데이트
        setDashoffset(fullDasharray - fullDasharray * (nextCounter / 100));

        if (nextCounter >= percentage) {
          clearInterval(interval);
          return percentage;
        }
        return nextCounter;
      });
    }, intervalDuration);

    return () => clearInterval(interval);
  }, [percentage, fullDasharray, animationDuration]);

  return (
    <>
      <div>
        <div className={styles.skill}>
          <div className={styles.outer}>
            <div className={styles.inner}>
              <div className={styles.number}>{Math.round(counter)}%</div>
            </div>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            width="160px"
            height="160px"
            className={styles.localSvg}
          >
            <defs>
              <linearGradient id="GradientColor">
                <stop offset="0%" stop-color="#e91e63" />
                <stop offset="100%" stop-color="#673ab7" />
              </linearGradient>
            </defs>
            <circle
              className={styles.localCircle}
              cx="80"
              cy="80"
              r="70"
              stroke-linecap="round"
              strokeDasharray={fullDasharray}
              strokeDashoffset={dashoffset}
            />
          </svg>
        </div>
      </div>
    </>
  );
}

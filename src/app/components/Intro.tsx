import React from "react";

export default function Intro() {
  const introText = `화학공학을 전공한 제 배경은 일반적인 프론트엔드 개발자와 다소 다를 수 있습니다.
   대학 전공이 화학이지만, 화학의 추측과 가설에 기반한 논리가 마음에 들지 않았습니다.
   그래서 저는 논리적 사고를 추구하지만 정해진 답에 구애받지 않는 프로그래밍에 관심을 갖게 되었습니다.
   웹은 누구나 쉽게 접근 가능하고 기기에 구애받지 않으므로 앞으로 기술이 발전될 수록
   앱을 포함한 여러 분야가 웹 중심으로 통합될 것이라는 믿음 때문에 웹 개발을 선택하게 되었습니다.
   현대의 웹 개발 트렌드에서 프론트엔드와 백엔드의 경계가 점점 더 흐릿해지고 있음을 인식하고 있으며,
   이에 따라 백엔드 개발 및 AI 기술도 관심을 가지고 배우고 있습니다.
   `;

  const formattedDescription = introText.split("\n").map((line, index) => (
    <React.Fragment key={index}>
      {line}
      <br />
    </React.Fragment>
  ));

  return (
    <div className="text-customBlack mt-8">
      <p className="text-xs mt-2 textgap leading-loose">
        {formattedDescription}
      </p>
    </div>
  );
}

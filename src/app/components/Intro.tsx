import React from "react";

export default function Intro() {
  const introText = `화학공학을 전공한 저의 배경은 일반적인 프론트엔드 개발자와 다를 수 있습니다.
  대학에서 화학을 전공하며, 추측과 가설에 기반한 화학의 논리가 제게는 다소 맞지 않음을 느꼈고,
  정해진 답이 없으면서도 논리적인 사고를 요구하는 프로그래밍 분야에 매력을 느끼게 되었습니다.
  그 중에서도 웹의 접근성과 호환성 때문에 웹에 관심을 가지게 되었습니다.
  저는 웹 기술이 계속 발전해서 앱을 포함한 여러 분야를 통합할 것이라고 확신합니다.
  또한 현대의 웹 개발 트렌드가 프론트엔드와 백엔드의 경계를 흐리게 하고 있음을 인식하고 있으며,
  이러한 변화에 발맞추어 백엔드 개발과 AI 기술에도 관심을 가지고 뒤쳐지지 않으려 노력하고 있습니다.
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

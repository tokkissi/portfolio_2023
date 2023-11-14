import React from "react";

type SkillDetailTextProps = {
  skillName: string;
  description: string;
};

export default function SkillDetailText({
  description,
  skillName,
}: SkillDetailTextProps) {
  // description에서 \n을 <br/>로 변환
  const formattedDescription = description.split("\n").map((line, index) => (
    <React.Fragment key={index}>
      {line}
      <br />
    </React.Fragment>
  ));

  return (
    <div className="text-customBlack ml-4">
      <p className="font-bold">{skillName}</p>
      <p className="text-xs mt-2">{formattedDescription}</p>
    </div>
  );
}

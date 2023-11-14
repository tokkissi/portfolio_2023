import SkillCard from "./SkillCard";

export default function SkillGrid() {
  const skillList = [
    {
      skillName: "JavaScript",
      description: "동적인 웹사이트를 구현 할 수 있습니다",
      percentage: 70,
    },
    {
      skillName: "TypeScript",
      description: "예측가능하고 안정적인 코드를 작성 가능합니다",
      percentage: 70,
    },
    {
      skillName: "React",
      description: "재사용가능한 UI를 구현할 수 있습니다",
      percentage: 70,
    },
    {
      skillName: "Next.js",
      description: `SEO 최적화 및 벡엔드를 구현할 수 있습니다`,
      percentage: 70,
    },
    {
      skillName: "HTML5",
      description: "웹 페이지의 기본 뼈대를 만들고, 컨텐츠를 넣을 수 있습니다",
      percentage: 70,
    },
    {
      skillName: "CSS3",
      description: "원하는 디자인의 웹 페이지를 구현할 수 있습니다",
      percentage: 60,
    },

    {
      skillName: "Tailwind CSS",
      description: "빠르게 반응형 디자인을 만들 수 있습니다",
      percentage: 65,
    },
    {
      skillName: "Styled Components",
      description: "React 컴포넌트에 스타일을 적용 가능합니다",
      percentage: 60,
    },
    {
      skillName: "Mongo DB",
      description:
        "Next.js와 함께 사용하여 데이터를 저장하고 관리할 수 있습니다",
      percentage: 55,
    },
    {
      skillName: "Figma",
      description: "기획 시 UI/UX 디자인을 간단히 그릴 수 있습니다",
      percentage: 25,
    },
    {
      skillName: "공공 데이터 포털 API",
      description: "공공 데이터 API를 사용할 수 있습니다",
      percentage: 45,
    },
    {
      skillName: "Chat-GPT API",
      description: "인공지능 챗봇 및 이미지 생성 기능을 구현 가능합니다",
      percentage: 60,
    },
    {
      skillName: "stable diffusion",
      description: "원하는 배경이나 캐릭터의 이미지를 AI로 생성 가능합니다",
      percentage: 45,
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-y-2">
      {skillList.map((skill, index) => (
        <SkillCard
          key={index}
          skillName={skill.skillName}
          description={skill.description}
          percentage={skill.percentage}
        />
      ))}
    </div>
  );
}

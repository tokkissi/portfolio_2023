import ProgressBar from "./ProgressBar";
import SkillDetailText from "./SkillDetailText";

type SkillCardProps = {
  skillName: string;
  description: string;
  percentage: number;
};

export default function SkillCard({
  skillName,
  description,
  percentage,
}: SkillCardProps) {
  return (
    <div className="w-full p-2 flex">
      <ProgressBar percentage={percentage} animationDuration={1000} />
      <SkillDetailText skillName={skillName} description={description} />
    </div>
  );
}

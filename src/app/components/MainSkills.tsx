import SkillCard from "./SkillCard";
import SkillGrid from "./SkillGrid";

export default function MainSkills() {
  return (
    <div className="shadow-customBox w-[736px] px-4">
      <p className="text-center text-3xl font-bold my-6">Main Skills</p>
      <SkillGrid />
    </div>
  );
}

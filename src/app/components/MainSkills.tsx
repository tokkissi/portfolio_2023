import SkillCard from "./SkillCard";
import SkillGrid from "./SkillGrid";

export default function MainSkills() {
  return (
    <div className="w-[736px] px-4 mb-4 scroll-mt-10" id="main-skills">
      <p className="text-center text-3xl font-bold my-6">Main Skills</p>
      <SkillGrid />
    </div>
  );
}

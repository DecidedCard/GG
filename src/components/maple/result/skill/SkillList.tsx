import React from "react";

import SkillCard from "./SkillCard";

import type { Skill } from "@/types/maple/skill";

const SkillList = ({ skillInfo }: { skillInfo: Skill }) => {
  return (
    <section className="flex flex-col gap-5 p-6 w-full bg-bg-200 rounded-lg">
      <h3 className="text-title/24px md:text-title/20px sm:text-title/16px">
        {skillInfo.character_skill_grade}차 스킬
      </h3>
      <div className="flex flex-wrap justify-center items-center gap-4 mx-auto">
        {skillInfo.character_skill.map((item) => (
          <SkillCard item={item} key={item.skill_name} />
        ))}
      </div>
    </section>
  );
};

export default SkillList;

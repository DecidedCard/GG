import React from "react";

import SkillCard from "./SkillCard";

import type { Skill } from "@/types/maple/mapleApi";

const SkillList = ({ skillInfo }: { skillInfo: Skill }) => {
  return (
    <section className="flex flex-col gap-5 p-6 bg-bg-200 rounded-lg">
      <h3 className="text-title/24px md:text-title/20px sm:text-title/16px">
        {skillInfo.character_skill_grade}차 스킬
      </h3>
      <div className="grid grid-cols-6 gap-4 mx-auto md:grid-cols-3 sm:grid-cols-2">
        {skillInfo.character_skill.map((item) => (
          <SkillCard item={item} key={item.skill_name} />
        ))}
      </div>
    </section>
  );
};

export default SkillList;

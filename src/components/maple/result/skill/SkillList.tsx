import React from "react";

import type { Skill } from "@/types/maple/mapleApi";
import Image from "next/image";

const SkillList = ({ skillInfo }: { skillInfo: Skill }) => {
  console.log(skillInfo);
  return (
    <section className="flex flex-col gap-5 p-6 bg-bg-200">
      <h3 className="text-title/24px">
        {skillInfo.character_skill_grade}차 스킬
      </h3>
      <div className="flex flex-wrap gap-3">
        {skillInfo.character_skill.map((item, idx) => (
          <div
            key={idx}
            className="p-4 w-40 border border-solid text-center border-text-100 rounded-lg"
          >
            <Image
              src={item.skill_icon}
              alt="skill-icon"
              width={30}
              height={30}
              className="mx-auto"
            />
            <p className="whitespace-nowrap text-ellipsis overflow-hidden">
              {item.skill_name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillList;

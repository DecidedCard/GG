import React from "react";

import type { Skill } from "@/types/maple/mapleApi";
import Image from "next/image";
import { Tooltip } from "@nextui-org/tooltip";
import SkillDetail from "./SkillDetail";

const SkillList = ({ skillInfo }: { skillInfo: Skill }) => {
  return (
    <section className="flex flex-col gap-5 p-6 bg-bg-200 rounded-lg">
      <h3 className="text-title/24px">
        {skillInfo.character_skill_grade}차 스킬
      </h3>
      <div className="grid grid-cols-6 gap-4 mx-auto">
        {skillInfo.character_skill.map((item, idx) => (
          <Tooltip key={idx} content={<SkillDetail item={item} />}>
            <div className="p-4 w-40 border border-solid text-center border-text-100 rounded-lg">
              <Image
                src={item.skill_icon}
                alt="skill-icon"
                width={30}
                height={30}
                className="mx-auto"
              />
              <p className="mt-4 whitespace-nowrap text-ellipsis overflow-hidden">
                {item.skill_name}
              </p>
            </div>
          </Tooltip>
        ))}
      </div>
    </section>
  );
};

export default SkillList;

import React from "react";
import Image from "next/image";

import { Popover, PopoverContent, PopoverTrigger } from "@nextui-org/popover";

import SkillDetail from "./SkillDetail";

import type { Skill } from "@/types/maple/mapleApi";

const SkillList = ({ skillInfo }: { skillInfo: Skill }) => {
  return (
    <section className="flex flex-col gap-5 p-6 bg-bg-200 rounded-lg">
      <h3 className="text-title/24px md:text-title/20px sm:text-title/16px">
        {skillInfo.character_skill_grade}차 스킬
      </h3>
      <div className="grid grid-cols-6 gap-4 mx-auto md:grid-cols-3 sm:grid-cols-2">
        {skillInfo.character_skill.map((item, idx) => (
          <Popover key={idx} placement="top">
            <PopoverTrigger>
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
            </PopoverTrigger>
            <PopoverContent>
              <SkillDetail item={item} />
            </PopoverContent>
          </Popover>
        ))}
      </div>
    </section>
  );
};

export default SkillList;

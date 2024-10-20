import React from "react";
import Image from "next/image";

import { CharacterSkill } from "@/types/maple/mapleApi";

const SkillDetail = ({ item }: { item: CharacterSkill }) => {
  return (
    <div className="flex flex-col gap-2 p-6 w-96 bg-bg-300 text-white rounded-lg">
      <p className="text-body/18px text-center">{item.skill_name}</p>
      <div className="flex gap-4 whitespace-break-spaces">
        <Image
          src={item.skill_icon}
          alt="skill-icon"
          width={50}
          height={50}
          className="w-[50px] h-[50px]"
        />
        <p>{item.skill_description}</p>
      </div>
      <hr className="w-full border-text-200" />
      <div>
        <p>[현재레벨{item.skill_level}]</p>
        {item.skill_effect && <p>{item.skill_effect}</p>}
      </div>
    </div>
  );
};

export default SkillDetail;

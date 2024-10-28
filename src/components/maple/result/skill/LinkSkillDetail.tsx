import React from "react";
import Image from "next/image";

import type { CharacterLinkSkillPreset } from "@/types/maple/skill";

const LinkSkillDetail = ({ item }: { item: CharacterLinkSkillPreset }) => {
  return (
    <div className="flex flex-col gap-3 p-6 w-96 bg-bg-300 text-text-100">
      <p className="mx-auto">{item.skill_name}</p>
      <hr className="w-full border-text-200" />
      <div className="flex gap-3">
        <Image
          src={item.skill_icon}
          alt={item.skill_name}
          width={70}
          height={70}
          className="w-[70px] h-[70px]"
        />
        <div>
          <p className="whitespace-break-spaces">{item.skill_description}</p>
        </div>
      </div>
      <hr className="w-full border-text-200" />
      <div>
        <p>[현재 레벨: {item.skill_level}]</p>
        <p>{item.skill_effect}</p>
      </div>
    </div>
  );
};

export default LinkSkillDetail;

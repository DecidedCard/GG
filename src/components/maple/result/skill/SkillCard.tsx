import React from "react";
import Image from "next/image";

import CustomPopover from "@/components/common/CustomPopover";
import SkillDetail from "./SkillDetail";

import type { CharacterSkill } from "@/types/maple/mapleApi";

const SkillCard = ({ item }: { item: CharacterSkill }) => {
  return (
    <CustomPopover popoverContents={<SkillDetail item={item} />}>
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
    </CustomPopover>
  );
};

export default SkillCard;

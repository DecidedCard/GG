import React from "react";
import Image from "next/image";

import CustomPopover from "@/components/common/CustomPopover";
import LinkSkillDetail from "./LinkSkillDetail";

import type { CharacterLinkSkillPreset } from "@/types/maple/skill";

const LinkSkillCard = ({ item }: { item: CharacterLinkSkillPreset }) => {
  return (
    <CustomPopover key={item.skill_name} popoverContents={<LinkSkillDetail />}>
      <div className="flex flex-col items-center gap-3 p-4 w-28 border border-solid border-text-100 rounded-md">
        <Image
          src={item.skill_icon}
          alt={item.skill_name}
          width={50}
          height={50}
        />
        <p className="w-full whitespace-nowrap overflow-hidden text-ellipsis">
          {item.skill_name}
        </p>
      </div>
    </CustomPopover>
  );
};

export default LinkSkillCard;

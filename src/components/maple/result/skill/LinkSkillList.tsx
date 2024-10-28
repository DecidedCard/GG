import React, { useState } from "react";

import type { LinkSkill } from "@/types/maple/skill";
import Image from "next/image";
import CustomPopover from "@/components/common/CustomPopover";

const LinkSkillList = ({ item }: { item: LinkSkill }) => {
  const [linkSkillPreset, setLinkSkillPreset] = useState(
    item.character_link_skill_preset_1
  );

  const [PresetNumber, setPresetNumber] = useState(1);

  const onClickSetPresetHandler = (preset: 1 | 2 | 3) => {
    const presets = {
      1: item.character_link_skill_preset_1,
      2: item.character_link_skill_preset_2,
      3: item.character_link_skill_preset_3,
    };
    setPresetNumber(preset);
    setLinkSkillPreset(presets[preset]);
  };

  return (
    <div className="flex flex-col gap-4 p-6 w-full rounded-lg bg-bg-200">
      <h3 className="flex justify-between text-title/24px md:text-title/20px sm:text-title/16px">
        링크스킬
        <nav className="flex items-center gap-4 text-body/18px">
          <ol
            onClick={() => onClickSetPresetHandler(1)}
            className={`p-2 cursor-pointer rounded ${
              PresetNumber === 1 && "bg-primary-100"
            }`}
          >
            프리셋1
          </ol>
          <ol
            onClick={() => onClickSetPresetHandler(2)}
            className={`p-2 cursor-pointer rounded ${
              PresetNumber === 2 && "bg-primary-100"
            }`}
          >
            프리셋2
          </ol>
          <ol
            onClick={() => onClickSetPresetHandler(3)}
            className={`p-2 cursor-pointer rounded ${
              PresetNumber === 3 && "bg-primary-100"
            }`}
          >
            프리셋3
          </ol>
        </nav>
      </h3>
      <div className="flex flex-wrap justify-center items-center gap-4">
        {linkSkillPreset.map((item) => (
          <CustomPopover
            key={item.skill_name}
            popoverContents={<div>test</div>}
          >
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
        ))}
      </div>
    </div>
  );
};

export default LinkSkillList;

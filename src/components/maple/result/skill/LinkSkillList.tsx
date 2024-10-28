import React, { useState } from "react";

import LinkSkillCard from "./LinkSkillCard";

import type { LinkSkill } from "@/types/maple/skill";

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
          <LinkSkillCard key={item.skill_name} item={item} />
        ))}
      </div>
    </div>
  );
};

export default LinkSkillList;

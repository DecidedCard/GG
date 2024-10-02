import React from "react";

import type { OverallRanking } from "@/types/mapleApi";

const RankingBar = ({ item }: { item: OverallRanking }) => {
  return (
    <div className="flex justify-between py-1 px-3 w-full text-body/18px bg-white rounded">
      <div className="flex justify-between w-40">
        <p>{item.ranking}</p>
        <p className="w-32 text-center">{item.character_name}</p>
      </div>
      <div className="flex justify-between w-96">
        <p>{item.character_level}</p>
        <p className="w-32 text-center">
          {item.sub_class_name || item.class_name}
        </p>
        <p className="w-32 text-center">
          {item.character_guildname || "길드없음"}
        </p>
      </div>
    </div>
  );
};

export default RankingBar;

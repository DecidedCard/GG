import React from "react";

import type { UnionRanking } from "@/types/maple/mapleApi";

const UnionRankingBar = ({ item }: { item: UnionRanking }) => {
  return (
    <div className="flex justify-between py-1 px-3 w-full text-body/18px bg-white rounded">
      <div className="flex justify-between w-40">
        <p>{item.ranking}</p>
        <p className="w-32 text-center">{item.character_name}</p>
      </div>
      <div className="flex justify-between w-60">
        <p>{item.union_level}</p>
        <p className="w-32 text-center">
          {item.sub_class_name || item.class_name}
        </p>
      </div>
    </div>
  );
};

export default UnionRankingBar;

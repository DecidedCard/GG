import React from "react";
import Link from "next/link";

import { OverallRanking } from "@/types/maple/mapleApi";

const RankingBar = ({ item }: { item: OverallRanking }) => {
  return (
    <div className="flex justify-between pt-2 px-3 w-full text-body/14px border-t border-solid border-text-100 rounded">
      <div className="flex justify-between w-40">
        <p>{item.ranking}</p>
        <Link href={`/maple/result?character_name=${item.character_name}`}>
          <p className="w-32 text-center">{item.character_name}</p>
        </Link>
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

import React from "react";
import Link from "next/link";

import { OverallRanking } from "@/types/maple/mapleApi";

const RankingBar = ({ item }: { item: OverallRanking }) => {
  return (
    <div className="flex justify-between pt-2 px-3 w-full text-body/14px border-t border-solid border-text-100 rounded sm:text-body/10px">
      <div className="flex justify-between w-40 sm:w-20">
        <p>{item.ranking}</p>
        <Link href={`/maple/result?character_name=${item.character_name}`}>
          <p className="w-32 text-center sm:w-16">{item.character_name}</p>
        </Link>
      </div>
      <div className="flex justify-between w-96 sm:w-52">
        <p>{item.character_level}</p>
        <p className="w-32 text-center sm:w-20">
          {item.sub_class_name || item.class_name}
        </p>
        <p className="w-32 text-center sm:w-20">
          {item.character_guildname || "길드없음"}
        </p>
      </div>
    </div>
  );
};

export default RankingBar;

import React from "react";
import Link from "next/link";

import { BaseRanking, OverallRanking } from "@/types/maple/mapleApi";

const RankingBar = <T extends BaseRanking>({ item }: { item: T }) => {
  console.log("character_level" in item);
  return (
    <div className="flex justify-between pt-2 px-3 w-full text-body/14px border-t border-solid border-text-100 rounded sm:text-body/10px">
      <div className="flex justify-between w-40 sm:w-20">
        <p>{item.ranking}</p>
        <Link
          href={`/maple/result?character_name=${item.character_name}&type=stat`}
        >
          <p className="w-32 text-center sm:w-16">{item.character_name}</p>
        </Link>
      </div>
      <div className="flex w-96 sm:w-52 justify-between">
        {"character_level" in item && (
          <span>{(item as unknown as OverallRanking).character_level}</span>
        )}
        <span className="w-32 sm:w-20 text-center truncate">
          {item.sub_class_name || item.class_name}
        </span>
        {"character_guildname" in item && (
          <span className="w-32 sm:w-20 text-center truncate">
            {(item as unknown as OverallRanking).character_guildname ||
              "길드없음"}
          </span>
        )}
      </div>
    </div>
  );
};

export default RankingBar;

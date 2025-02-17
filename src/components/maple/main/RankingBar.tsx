import React from "react";
import Link from "next/link";

import { BaseRanking, OverallRanking } from "@/types/maple/mapleApi";

const RankingBar = <T extends BaseRanking>({ item }: { item: T }) => {
  return (
    <div className="flex justify-between pt-2 px-3 w-full text-body/14px border-t border-solid border-secondary-300 sm:text-body/10px">
      <div className="flex justify-between w-36 sm:w-20">
        <p className="flex justify-center w-4">{item.ranking}</p>
        <Link
          href={`/maple/result?character_name=${item.character_name}&type=stat`}
          className="flex justify-center w-20"
        >
          {item.character_name}
        </Link>
      </div>
      <div className="flex justify-around w-96 sm:w-52">
        {"character_level" in item && (
          <span>{(item as unknown as OverallRanking).character_level}</span>
        )}
        <span className="flex justify-center w-20">
          {item.sub_class_name || item.class_name}
        </span>
        {"character_guildname" in item && (
          <span className="flex justify-center w-20">
            {(item as unknown as OverallRanking).character_guildname ||
              "길드없음"}
          </span>
        )}
      </div>
    </div>
  );
};

export default RankingBar;

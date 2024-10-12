import React from "react";
import Link from "next/link";

import formatTime from "@/util/formatTime";

import type { DojangRanking } from "@/types/maple/mapleApi";

const DojangRankingBar = ({ item }: { item: DojangRanking }) => {
  return (
    <div className="flex justify-between py-1 px-3 w-full text-body/14px bg-white rounded">
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
        <p className="w-10 text-center">{item.dojang_floor}</p>
        <p className="w-20 text-center">
          {formatTime(item.dojang_time_record)}
        </p>
      </div>
    </div>
  );
};

export default DojangRankingBar;

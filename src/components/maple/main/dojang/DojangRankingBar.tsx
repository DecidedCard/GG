import React from "react";
import Link from "next/link";

import formatTime from "@/util/formatTime";

import type { DojangRanking } from "@/types/maple/mapleApi";

const DojangRankingBar = ({ item }: { item: DojangRanking }) => {
  return (
    <div className="flex justify-between pt-2 px-3 w-full text-body/14px border-t  border-solid border-text-100 rounded sm:text-body/10px">
      <div className="flex justify-between w-40 sm:w-20">
        <p className="sm:w-8">{item.ranking}</p>
        <Link href={`/maple/result?character_name=${item.character_name}`}>
          <p className="w-32 text-center sm:w-16">{item.character_name}</p>
        </Link>
      </div>
      <div className="flex justify-between w-96 sm:w-52">
        <p className="sm:w-8">{item.character_level}</p>
        <p className="w-32 text-center sm:w-24">
          {item.sub_class_name || item.class_name}
        </p>
        <p className="w-10 text-center sm:w-8">{item.dojang_floor}</p>
        <p className="w-20 text-center sm:w-16">
          {formatTime(item.dojang_time_record)}
        </p>
      </div>
    </div>
  );
};

export default DojangRankingBar;

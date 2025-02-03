import React from "react";
import Link from "next/link";

import type { UnionRanking } from "@/types/maple/mapleApi";

const UnionRankingBar = ({ item }: { item: UnionRanking }) => {
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
      <div className="flex justify-between w-60 sm:w-40">
        <p className="text-center sm:w-11">{item.union_level}</p>
        <p className="w-32 text-center sm:w-20">
          {item.sub_class_name || item.class_name}
        </p>
      </div>
    </div>
  );
};

export default UnionRankingBar;

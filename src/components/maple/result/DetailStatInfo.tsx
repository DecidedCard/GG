import React from "react";

import type { FinalStat } from "@/types/maple/mapleApi";
import formatCharacterStat from "@/util/maple/formatCharacterStat";

const DetailStatInfo = ({ stat }: { stat: FinalStat[] }) => {
  return (
    <div className="flex flex-col gap-3 p-3 w-56 border-b border-solid border-black">
      {stat.map((item) => {
        const stat = formatCharacterStat(item);
        return (
          <div
            key={item.stat_name}
            className="flex justify-between text-body/14px text-gray-400"
          >
            <p>{item.stat_name}</p>
            <p>{stat}</p>
          </div>
        );
      })}
    </div>
  );
};

export default DetailStatInfo;

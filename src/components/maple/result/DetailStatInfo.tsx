import React from "react";

import type { FinalStat } from "@/types/maple/mapleApi";

const DetailStatInfo = ({ stat }: { stat: FinalStat[] }) => {
  return (
    <div className="flex flex-col gap-3 p-3 border-b border-solid border-black">
      {stat.map((item) => (
        <div
          key={item.stat_name}
          className="flex justify-between text-body/14px text-gray-400"
        >
          <p>{item.stat_name}</p>
          <p>{item.stat_value}</p>
        </div>
      ))}
    </div>
  );
};

export default DetailStatInfo;

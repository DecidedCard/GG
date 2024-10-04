import React from "react";

import type { CharacterStatInfo } from "@/types/maple/mapleApi";

const StatInfo = ({ info }: { info: CharacterStatInfo }) => {
  console.log(info);
  return (
    <div className="flex flex-col border w-fit border-solid border-black rounded-lg">
      <div className="flex items-center gap-3 py-4 px-10 w-fit">
        <div className="w-14 h-14 rounded-full bg-gray-500"></div>
        <div>
          <p className="text-body/18px">전투력</p>
          <p>{info.final_stat[42].stat_value}</p>
        </div>
      </div>
      <div className="flex flex-col gap-1 p-2 border-t border-b border-solid border-black">
        <p>
          {info.final_stat[0].stat_value} ~ {info.final_stat[2].stat_value}
        </p>
        <p className="text-body/14px text-gray-400">스탯 공격력</p>
      </div>
    </div>
  );
};

export default StatInfo;

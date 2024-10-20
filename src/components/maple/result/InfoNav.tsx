import React from "react";

import type { Info } from "@/hooks/maple/result/useResult";

const InfoNav = ({
  info,
  onClickCharacterInfoSet,
}: {
  info: Info;
  onClickCharacterInfoSet: (arg: Info) => void;
}) => {
  return (
    <nav className="flex items-center px-4 gap-5 w-full h-16 bg-bg-200">
      <button
        onClick={() => onClickCharacterInfoSet("stat")}
        className={`py-2 w-28 h-fit border border-solid border-text-100 rounded-lg ${
          info === "stat" && "bg-primary-100"
        }`}
      >
        스탯/아이템
      </button>
      <button
        onClick={() => onClickCharacterInfoSet("skill")}
        className={`py-2 w-28 h-fit border border-solid border-text-100 rounded-lg ${
          info === "skill" && "bg-primary-100"
        }`}
      >
        스킬
      </button>
    </nav>
  );
};

export default InfoNav;

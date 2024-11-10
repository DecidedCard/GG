"use client";

import React from "react";
import { usePathname } from "next/navigation";

import type { Info } from "@/hooks/maple/result/useResult";

const InfoNav = ({
  onClickCharacterInfoSet,
}: {
  onClickCharacterInfoSet: (arg: Info) => void;
}) => {
  const location = usePathname();

  return (
    <nav className="flex items-center px-4 gap-5 w-full h-16 bg-bg-200">
      <button
        onClick={() => onClickCharacterInfoSet("stat")}
        className={`py-2 w-28 h-fit border border-solid border-text-100 rounded-lg ${
          location.indexOf("stat") !== -1 && "bg-primary-100"
        }`}
      >
        스탯/아이템
      </button>
      <button
        onClick={() => onClickCharacterInfoSet("skill")}
        className={`py-2 w-28 h-fit border border-solid border-text-100 rounded-lg ${
          location.indexOf("skill") !== -1 && "bg-primary-100"
        }`}
      >
        스킬 및 심볼
      </button>
      <button
        onClick={() => onClickCharacterInfoSet("union")}
        className={`py-2 w-28 h-fit border border-solid border-text-100 rounded-lg ${
          location.indexOf("union") !== -1 && "bg-primary-100"
        }`}
      >
        유니온
      </button>
    </nav>
  );
};

export default InfoNav;

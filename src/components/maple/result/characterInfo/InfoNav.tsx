"use client";

import React, { useMemo } from "react";
import { usePathname } from "next/navigation";

import type { Info } from "@/hooks/maple/result/useResult";

const InfoNav = ({
  onClickCharacterInfoSet,
}: {
  onClickCharacterInfoSet: (arg: Info) => void;
}) => {
  const location = usePathname();

  const isStatActive = useMemo(() => location.includes("stat"), [location]);
  const isSkillActive = useMemo(() => location.includes("skill"), [location]);
  const isUnionActive = useMemo(() => location.includes("union"), [location]);

  return (
    <nav className="flex items-center px-4 gap-5 w-full h-16 bg-bg-200">
      <button
        onClick={() => onClickCharacterInfoSet("stat")}
        className={`py-2 w-28 h-fit border border-solid border-text-100 rounded-lg ${
          isStatActive && "bg-primary-100"
        }`}
      >
        스탯/아이템
      </button>
      <button
        onClick={() => onClickCharacterInfoSet("skill")}
        className={`py-2 w-28 h-fit border border-solid border-text-100 rounded-lg ${
          isSkillActive && "bg-primary-100"
        }`}
      >
        스킬 및 심볼
      </button>
      <button
        onClick={() => onClickCharacterInfoSet("union")}
        className={`py-2 w-28 h-fit border border-solid border-text-100 rounded-lg ${
          isUnionActive && "bg-primary-100"
        }`}
      >
        유니온
      </button>
    </nav>
  );
};

export default InfoNav;

"use client";

import React, { useMemo } from "react";
import { usePathname, useSearchParams } from "next/navigation";

import useCharacterNavigation from "@/hooks/maple/useNavigation";

import type { Info } from "@/types/maple";

const InfoNav = () => {
  const { navigationToCharacterInfo } = useCharacterNavigation();
  const queryString = useSearchParams();
  const location = usePathname();

  const characterName = queryString.get("character_name");

  const isStatActive = useMemo(() => location.includes("stat"), [location]);
  const isSkillActive = useMemo(() => location.includes("skill"), [location]);
  const isUnionActive = useMemo(() => location.includes("union"), [location]);

  return (
    <nav className="flex items-center px-4 gap-5 w-full h-16 bg-bg-200">
      {["stat", "skill", "union"].map((type) => (
        <button
          key={type}
          onClick={() =>
            navigationToCharacterInfo(characterName!, type as Info)
          }
          className={`py-2 w-28 h-fit border border-solid border-text-100 rounded-lg ${
            (type === "stat" && isStatActive && "bg-primary-100") ||
            (type === "skill" && isSkillActive && "bg-primary-100") ||
            (type === "union" && isUnionActive && "bg-primary-100")
          }`}
        >
          {type === "stat"
            ? "스탯/아이템"
            : type === "skill"
            ? "스킬 및 심볼"
            : "유니온"}
        </button>
      ))}
    </nav>
  );
};

export default InfoNav;

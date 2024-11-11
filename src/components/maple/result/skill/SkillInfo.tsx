"use client";

import React from "react";
import { useSearchParams } from "next/navigation";

import { useCharacterQuery } from "@/hooks/maple/useQuery";

import SkillList from "./SkillList";
import SymbolList from "../symbol/SymbolList";
import LinkSkillList from "./LinkSkillList";

const SkillInfo = () => {
  const params = useSearchParams();

  const name = params.get("character_name");

  const { data } = useCharacterQuery(name, "skill");

  return (
    data.sixthSkillInfo && (
      <div className="flex flex-col gap-5 w-[1280px] md:w-full sm:w-full">
        <SkillList skillInfo={data.sixthSkillInfo} />
        <SkillList skillInfo={data.fifthSkillInfo} />
        <SymbolList item={data.symbolInfo} />
        <LinkSkillList item={data.linkSkillInfo} />
      </div>
    )
  );
};

export default SkillInfo;

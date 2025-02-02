"use client";

import React from "react";

import SkillList from "./SkillList";
import SymbolList from "../symbol/SymbolList";
import LinkSkillList from "./LinkSkillList";

import type { CharacterData } from "@/types/maple/mapleApi";

const SkillInfo = ({ data }: { data: CharacterData }) => {
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

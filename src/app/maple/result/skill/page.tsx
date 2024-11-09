"use client";

import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";

import { Spinner } from "@nextui-org/spinner";

import LinkSkillList from "@/components/maple/result/skill/LinkSkillList";
import SkillList from "@/components/maple/result/skill/SkillList";
import SymbolList from "@/components/maple/result/symbol/SymbolList";
import { useCharacterQuery } from "@/hooks/maple/useQuery";

const SkillPage = () => {
  const params = useSearchParams();

  const name = params.get("character_name");

  const { data } = useCharacterQuery(name, "skill");

  return (
    <Suspense fallback={<Spinner />}>
      <div className="flex flex-col gap-5 w-[1280px] md:w-full sm:w-full">
        <SkillList skillInfo={data.sixthSkillInfo!} />
        <SkillList skillInfo={data.fifthSkillInfo!} />
        <SymbolList item={data.symbolInfo!} />
        <LinkSkillList item={data.linkSkillInfo!} />
      </div>
    </Suspense>
  );
};

export default SkillPage;

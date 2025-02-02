"use client";

import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import SkillInfo from "@/components/maple/result/skill/SkillInfo";
import LoadingOverlay from "@/components/common/LoadingOverlay";
import { useCharacterQuery } from "@/hooks/maple/useQuery";
import CharacterInfo from "@/components/maple/result/CharacterInfo";
import StatAndItemInfo from "@/components/maple/result/stat&item/StatAndItemInfo";
import UnionInfo from "@/components/maple/result/union/UnionInfo";

const Result = () => {
  const params = useSearchParams();

  const type = params.get("type");
  const name = params.get("character_name");

  const { data } = useCharacterQuery(name ? name : "");

  return (
    <Suspense fallback={<LoadingOverlay />}>
      <CharacterInfo data={data}>
        {type === "skill" && <SkillInfo data={data} />}
        {type === "stat" && <StatAndItemInfo data={data} />}
        {type === "union" && <UnionInfo data={data} />}
      </CharacterInfo>
    </Suspense>
  );
};

export default Result;

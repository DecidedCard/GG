"use client";

import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";

import UnionArtifact from "@/components/maple/result/union/UnionArtifact";
import UnionRaider from "@/components/maple/result/union/UnionRaider";
import { Spinner } from "@nextui-org/spinner";

import { useCharacterQuery } from "@/hooks/maple/useQuery";

const UnionPage = () => {
  const params = useSearchParams();

  const name = params.get("character_name");

  const { data } = useCharacterQuery(name, "union");

  return (
    <Suspense fallback={<Spinner />}>
      <div className="flex flex-col gap-5 w-[1280px] md:w-full sm:w-full">
        {data.unionArtifactInfo && (
          <UnionArtifact
            artifact={data.unionArtifactInfo}
            level={data.unionCharacterInfo.union_artifact_level}
          />
        )}
        {data.unionRaiderInfo && (
          <UnionRaider
            raider={data.unionRaiderInfo}
            unionInfo={data.unionCharacterInfo}
          />
        )}
      </div>
    </Suspense>
  );
};

export default UnionPage;

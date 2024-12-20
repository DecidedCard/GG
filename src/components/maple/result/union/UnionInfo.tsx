import React from "react";
import { useSearchParams } from "next/navigation";

import UnionArtifact from "./UnionArtifact";
import UnionRaider from "./UnionRaider";

import { useCharacterQuery } from "@/hooks/maple/useQuery";

const UnionInfo = () => {
  const params = useSearchParams();

  const name = params.get("character_name");

  const { data } = useCharacterQuery(name, "union");

  return (
    data.unionArtifactInfo && (
      <div className="flex flex-col gap-5 w-[1280px] md:w-full sm:w-full">
        <UnionArtifact
          artifact={data.unionArtifactInfo}
          level={data.unionCharacterInfo.union_artifact_level}
        />
        <UnionRaider
          raider={data.unionRaiderInfo}
          unionInfo={data.unionCharacterInfo}
        />
      </div>
    )
  );
};

export default UnionInfo;

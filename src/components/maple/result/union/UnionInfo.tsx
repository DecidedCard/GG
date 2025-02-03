import React from "react";

import UnionArtifact from "./UnionArtifact";
import UnionRaider from "./UnionRaider";

import type { CharacterData } from "@/types/maple/mapleApi";

const UnionInfo = ({ data }: { data: CharacterData }) => {
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

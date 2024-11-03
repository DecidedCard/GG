import React from "react";

import UnionArtifactCard from "./UnionArtifactCard";

import type { UnionArtifactCharacterInfo } from "@/types/maple/union";

const UnionArtifact = ({
  artifact,
  level,
}: {
  artifact: UnionArtifactCharacterInfo;
  level: number;
}) => {
  return (
    <section className="flex flex-col gap-3 p-4 bg-bg-200 rounded-lg">
      <h3 className="flex justify-between text-title/24px">
        <p>유니온 아티팩트</p>
        <p>ARTIFACT Lv.{level}</p>
      </h3>
      <hr className="w-full border-text-200" />
      <p className="text-title/20px">크리스탈</p>
      <div className="flex flex-wrap justify-center items-center gap-4">
        {artifact.union_artifact_crystal.map((item) => (
          <UnionArtifactCard key={item.name} item={item} />
        ))}
      </div>
      <hr className="w-full border-text-200" />
      <div className="flex flex-col gap-4">
        <p className="text-title/20px">능력치</p>
        <div className="grid grid-cols-2 gap-1">
          {artifact.union_artifact_effect.map((item) => (
            <div key={item.name} className="flex justify-between px-4 w-full">
              <p>{item.name}</p>
              <p>
                <label>레벨: </label>
                {item.level}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UnionArtifact;

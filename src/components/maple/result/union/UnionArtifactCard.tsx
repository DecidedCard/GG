import React from "react";

import type { UnionArtifactCrystal } from "@/types/maple/union";

const UnionArtifactCard = ({ item }: { item: UnionArtifactCrystal }) => {
  return (
    <div className="flex flex-col items-center gap-3 p-4 w-96 border border-solid border-text-100 rounded-lg">
      <p>{item.name.slice(7)}</p>
      <div>
        <p>{item.crystal_option_name_1}</p>
        <p>{item.crystal_option_name_2}</p>
        <p>{item.crystal_option_name_3}</p>
      </div>
    </div>
  );
};

export default UnionArtifactCard;

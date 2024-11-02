import React from "react";

import type { UnionRaiderCharacterInfo } from "@/types/maple/union";
import RaiderGrid from "./RaiderGrid";

const UnionRaider = ({ raider }: { raider: UnionRaiderCharacterInfo }) => {
  console.log(raider.union_block);
  return (
    <section className="p-4 bg-bg-200 rounded-lg">
      <h3>유니온 공격대</h3>
      <RaiderGrid item={raider.union_block} />
    </section>
  );
};

export default UnionRaider;

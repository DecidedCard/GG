import React from "react";

import type { UnionRaiderCharacterInfo } from "@/types/maple/union";
import RaiderGrid from "./RaiderGrid";
import JopImage from "../../JopImage";

const UnionRaider = ({ raider }: { raider: UnionRaiderCharacterInfo }) => {
  console.log(raider);
  raider.union_block.sort(
    (a, b) => Number(b.block_level) - Number(a.block_level)
  );

  return (
    <section className="flex flex-col gap-4 p-4 bg-bg-200 rounded-lg">
      <h3 className="text-title/24px">유니온 공격대</h3>
      <div className="flex gap-4">
        <RaiderGrid item={raider.union_block} />
        <div className="flex flex-wrap justify-between items-center gap-4 w-[300px]">
          {raider.union_block.map((item) => (
            <div
              key={item.block_class}
              className="flex gap-1 w-[140px] text-body/14px"
            >
              <div className="w-8">
                <JopImage jop={item.block_class} />
              </div>
              <div>
                <p>{item.block_class}</p>
                <p>Lv.{item.block_level}</p>
              </div>
            </div>
          ))}
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default UnionRaider;

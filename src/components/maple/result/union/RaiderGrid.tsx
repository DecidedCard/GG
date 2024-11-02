import React from "react";

import type { UnionBlock } from "@/types/maple/union";

const RaiderGrid = ({ item }: { item: UnionBlock[] }) => {
  return (
    <div className="grid grid-cols-22 grid-rows-20 p-[10px] w-[400px] h-[400px] bg-[#eee]">
      {item.map((block) => {
        return block.block_position.map((item, idx) => (
          <div
            key={idx}
            className="text-body/10px text-center rounded text-text-100 bg-[#007bff]"
            style={{
              gridColumnStart: item.x + 12,
              gridRowStart: 11 - item.y,
            }}
          ></div>
        ));
      })}
    </div>
  );
};

export default RaiderGrid;

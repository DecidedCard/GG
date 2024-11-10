import React from "react";

import type { UnionBlock } from "@/types/maple/union";

const RaiderGrid = ({ item }: { item: UnionBlock[] }) => {
  return (
    <div className="grid grid-cols-22 grid-rows-20 w-[311px] h-[282px] bg-gray-600 bg-union bg-cover">
      {/* 유니온 블록 배치 */}
      {item.map((block) => {
        return block.block_position.map((item, idx) => (
          <div
            key={idx}
            className="bg-[#fdd88e] bg-opacity-80"
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

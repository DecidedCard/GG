import React from "react";

import type { CharacterSymbol } from "@/types/maple/mapleApi";

const SymbolList = ({ item }: { item: CharacterSymbol }) => {
  const { symbol } = item;
  console.log(symbol);

  return (
    <div className="flex flex-col p-6 bg-bg-200 rounded-lg">
      <h3 className="ext-title/24px md:text-title/20px sm:text-title/16px">
        심볼
      </h3>
      <div></div>
    </div>
  );
};

export default SymbolList;

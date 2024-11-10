import React from "react";

import type { CharacterSymbol } from "@/types/maple/mapleApi";
import SymbolCard from "./SymbolCard";

const SymbolList = ({ item }: { item: CharacterSymbol }) => {
  const { symbol } = item;

  return (
    <div className="flex flex-col gap-6 p-6 bg-bg-200 rounded-lg">
      <h3 className="text-title/24px md:text-title/20px sm:text-title/16px">
        심볼
      </h3>
      <div className="flex justify-center items-center gap-5 flex-wrap">
        {symbol.map((item) => (
          <SymbolCard key={item.symbol_name} item={item} />
        ))}
      </div>
    </div>
  );
};

export default SymbolList;

import React from "react";

import type { Symbol } from "@/types/maple/mapleApi";
import Image from "next/image";

const SymbolCard = ({ item }: { item: Symbol }) => {
  return (
    <div className="flex justify-between items-center p-4  w-72 border border-solid border-text-100 rounded-md">
      <Image
        src={item.symbol_icon}
        alt={item.symbol_name}
        width={50}
        height={50}
        className="w-[50px] h-[50px]"
      />
      <div className="w-52 text-center">
        <p>{item.symbol_name}</p>
        <p>포스: {item.symbol_force}</p>
        <p>레벨: {item.symbol_level}</p>
      </div>
    </div>
  );
};

export default SymbolCard;

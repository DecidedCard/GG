import React from "react";

import type { Symbol } from "@/types/maple/mapleApi";
import Image from "next/image";

const SymbolDetail = ({ item }: { item: Symbol }) => {
  return (
    <div className="flex flex-col gap-2 p-6 w-96 bg-bg-300 text-white rounded-lg sm:w-4/5">
      <p className="mx-auto text-title/20px">{item.symbol_name}</p>
      <hr className="w-full border-dashed border-text-200" />
      <div className="flex items-center gap-5 px-4">
        <Image
          src={item.symbol_icon}
          alt={item.symbol_name}
          width={30}
          height={30}
        />
        <p className="text-text-200">REQ LEV: 200</p>
      </div>
      <hr className="w-full border-dashed border-text-200" />
      <div className="flex flex-col px-4">
        <p>성장레벨: {item.symbol_level}</p>
        <p>
          {item.symbol_growth_count !== 0
            ? item.symbol_growth_count + "/" + item.symbol_require_growth_count
            : "MAX"}
        </p>
        {item.symbol_str !== "0" && <p>STR: +{item.symbol_str}</p>}
        {item.symbol_dex !== "0" && <p>DEX: +{item.symbol_dex}</p>}
        {item.symbol_int !== "0" && <p>INT: +{item.symbol_int}</p>}
        {item.symbol_luk !== "0" && <p>LUK: +{item.symbol_luk}</p>}
        {item.symbol_hp !== "0" && <p>HP: +{item.symbol_hp}</p>}
        <p>
          {item.symbol_name.slice(0, 3)}포스: {item.symbol_force}
        </p>
      </div>
      <hr className="w-full border-dashed border-text-200" />
      <p className="px-4 whitespace-break-spaces">{item.symbol_description}</p>
    </div>
  );
};

export default SymbolDetail;

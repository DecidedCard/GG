import React from "react";

import type { Symbol } from "@/types/maple/mapleApi";
import Image from "next/image";
import CustomPopover from "@/components/common/CustomPopover";
import SymbolDetail from "./SymbolDetail";

const SymbolCard = ({ item }: { item: Symbol }) => {
  const stat =
    (item.symbol_dex !== "0" && item.symbol_dex) ||
    (item.symbol_int !== "0" && item.symbol_int) ||
    (item.symbol_hp !== "0" && item.symbol_hp) ||
    (item.symbol_luk !== "0" && item.symbol_luk) ||
    (item.symbol_str !== "0" && item.symbol_str);

  return (
    <CustomPopover popoverContents={<SymbolDetail item={item} />}>
      <div className="flex flex-col items-center gap-2 p-4 w-72 border border-solid border-text-100 rounded-md">
        <p>{item.symbol_name}</p>
        <hr className="w-full border-text-200" />
        <div className="flex justify-around items-center w-full">
          <Image
            src={item.symbol_icon}
            alt={item.symbol_name}
            width={50}
            height={50}
            className="w-[50px] h-[50px]"
          />
          <div className="flex gap-5 w-40 text-center">
            <div className="flex flex-col items-end w-24">
              <p>{item.symbol_name.slice(0, 3)}포스:</p>
              <p>주스탯:</p>
              <p>레벨:</p>
            </div>
            <div className="flex flex-col items-end">
              <p>{item.symbol_force}</p>
              <p>{stat}</p>
              <p>{item.symbol_level}</p>
            </div>
          </div>
        </div>
      </div>
    </CustomPopover>
  );
};

export default SymbolCard;

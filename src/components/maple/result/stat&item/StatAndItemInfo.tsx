import React from "react";

import StatInfo from "./StatInfo";
import ItemList from "../item/ItemList";

import type { CharacterData } from "@/types/maple/mapleApi";

const StatAndItemInfo = ({ data }: { data: CharacterData }) => {
  return (
    data.statInfo && (
      <div className="flex gap-3 sm:flex-col">
        <StatInfo info={data.statInfo} />
        <ItemList item={data.itemInfo} />
      </div>
    )
  );
};

export default StatAndItemInfo;

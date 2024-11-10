import React from "react";
import { useSearchParams } from "next/navigation";

import StatInfo from "./StatInfo";
import ItemList from "./item/ItemList";

import { useCharacterQuery } from "@/hooks/maple/useQuery";

const StatAndItemInfo = () => {
  const params = useSearchParams();

  const name = params.get("character_name");

  const { data } = useCharacterQuery(name, "stat");

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

import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";

import ItemList from "@/components/maple/result/item/ItemList";
import StatInfo from "@/components/maple/result/StatInfo";

import { useCharacterQuery } from "@/hooks/maple/useQuery";
import { Spinner } from "@nextui-org/spinner";

const StatPage = () => {
  const params = useSearchParams();

  const name = params.get("character_name");

  const { data } = useCharacterQuery(name, "stat");

  return (
    <Suspense fallback={<Spinner />}>
      {data.statInfo && data.itemInfo && (
        <div className="flex gap-3 sm:flex-col">
          <StatInfo info={data.statInfo} />
          <ItemList item={data.itemInfo} />
        </div>
      )}
    </Suspense>
  );
};

export default StatPage;

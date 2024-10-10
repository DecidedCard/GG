import React from "react";

import type { ItemEquipment, ItemEquipmentPreset } from "@/types/maple/item";
import StarForceCheck from "../StarForceCheck";

const ItemDetail = ({
  item,
}: {
  item: ItemEquipment | ItemEquipmentPreset;
}) => {
  return (
    <div className="flex flex-col p-4 w-[300px] bg-black text-white rounded-lg">
      <div className="w-[250px]">
        <StarForceCheck star={parseInt(item.starforce)} />
      </div>
      star-force: {item.starforce}
    </div>
  );
};

export default ItemDetail;

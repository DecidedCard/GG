import React from "react";

import type { ItemEquipment, ItemEquipmentPreset } from "@/types/maple/item";
import StarForceCheck from "../StarForceCheck";
import Image from "next/image";

const ItemDetail = ({
  item,
}: {
  item: ItemEquipment | ItemEquipmentPreset;
}) => {
  // console.log(item.item_total_option);
  const potentialBorderColor =
    (item.potential_option_grade === "레어" &&
      "border-4 border-solid border-blue-400") ||
    (item.potential_option_grade === "에픽" &&
      "border-4 border-solid border-violet-500") ||
    (item.potential_option_grade === "유니크" &&
      "border-4 border-solid border-yellow-300") ||
    (item.potential_option_grade === "레전드리" &&
      "border-4 border-solid border-green-300");

  return (
    <div className="flex flex-col items-center gap-1 py-4 w-[300px] bg-black text-white rounded-lg">
      <div className="w-[250px]">
        {item.starforce !== "0" && (
          <StarForceCheck star={parseInt(item.starforce)} />
        )}
      </div>
      <p className="mt-2 text-body/18px">
        {item.item_name}
        {item.scroll_upgrade !== "0" && `(+${item.scroll_upgrade})`}
      </p>
      <p>{item.potential_option_grade} 아이템</p>
      <div className="flex items-center gap-5 p-4 w-full border-t border-solid border-gray-500">
        <div
          className={`flex justify-center item  p-1 bg-gray-400 ${potentialBorderColor}`}
        >
          <Image
            src={item.item_icon}
            width={100}
            height={100}
            alt={item.item_name}
            className="w-8 h-fit"
          />
        </div>
      </div>
      <div className="p-4 w-full border-t border-solid border-gray-500">
        <p>장비분류: {item.item_equipment_part}</p>
        {item.item_total_option.str !== "0" && (
          <p>STR: +{item.item_total_option.str}</p>
        )}
        {item.item_total_option.dex !== "0" && (
          <p>DEX: +{item.item_total_option.dex}</p>
        )}
        {item.item_total_option.int !== "0" && (
          <p>INT: +{item.item_total_option.int}</p>
        )}
        {item.item_total_option.luk !== "0" && (
          <p>LUK: +{item.item_total_option.luk}</p>
        )}
      </div>
    </div>
  );
};

export default ItemDetail;

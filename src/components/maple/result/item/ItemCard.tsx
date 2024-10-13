import React from "react";
import Image from "next/image";

import { Tooltip } from "@nextui-org/tooltip";

import ItemDetail from "./ItemDetail";

import formatItemStat from "@/util/maple/formatItemStat";

import type { ItemEquipmentPreset } from "@/types/maple/item";

const ItemCard = ({ item }: { item: ItemEquipmentPreset }) => {
  return (
    <Tooltip content={<ItemDetail item={item} />}>
      <ul
        key={item.item_name}
        className="flex flex-col justify-center w-full h-40 bg-bg-100 rounded-lg"
      >
        <div className="flex gap-3 p-3">
          <Image
            src={item.item_icon}
            alt="아이템"
            width={100}
            height={100}
            className="my-auto w-8 h-fit"
          />
          <div className="flex flex-col">
            <p>{item.item_equipment_part}</p>
            <p>{item.item_name}</p>
            {item.starforce !== "0" && <p>⭐{item.starforce}</p>}
          </div>
        </div>
        {item.potential_option_grade && (
          <div className="flex justify-between px-3 py-2 text-body/14px border-t border-solid border-gray-300">
            <span className="w-10 text-center">잠재</span>
            <div className="flex gap-1">
              {item.potential_option_1 && (
                <p>{formatItemStat(item.potential_option_1)}</p>
              )}
              {item.potential_option_1 && (
                <p>{formatItemStat(item.potential_option_2)}</p>
              )}
              {item.potential_option_1 && (
                <p>{formatItemStat(item.potential_option_3)}</p>
              )}
            </div>
          </div>
        )}

        {item.additional_potential_option_grade && (
          <div className="flex justify-between px-3 py-2 text-body/14px border-t border-solid border-gray-300">
            <span className="w-10 text-center">에디</span>
            <div className="flex gap-1">
              {item.additional_potential_option_1 && (
                <p>{formatItemStat(item.additional_potential_option_1)}</p>
              )}
              {item.additional_potential_option_2 && (
                <p>{formatItemStat(item.additional_potential_option_2)}</p>
              )}
              {item.additional_potential_option_3 && (
                <p>{formatItemStat(item.additional_potential_option_3)}</p>
              )}
            </div>
          </div>
        )}
      </ul>
    </Tooltip>
  );
};

export default ItemCard;

import React from "react";
import Image from "next/image";

import { Popover, PopoverContent, PopoverTrigger } from "@nextui-org/popover";

import ItemDetail from "./ItemDetail";

import formatItemStat from "@/util/maple/formatItemStat";

import type { ItemEquipmentPreset } from "@/types/maple/item";

const ItemCard = ({ item }: { item: ItemEquipmentPreset }) => {
  const potentialColor =
    (item.potential_option_grade === "레어" && "text-blue-400") ||
    (item.potential_option_grade === "에픽" && "text-violet-500") ||
    (item.potential_option_grade === "유니크" && "text-yellow-300") ||
    (item.potential_option_grade === "레전드리" && "text-green-300");

  const additionalColor =
    (item.additional_potential_option_grade === "레어" && "text-blue-400") ||
    (item.additional_potential_option_grade === "에픽" && "text-violet-500") ||
    (item.additional_potential_option_grade === "유니크" &&
      "text-yellow-300") ||
    (item.additional_potential_option_grade === "레전드리" && "text-green-300");

  return (
    <Popover placement="top" showArrow>
      <PopoverTrigger>
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
              {item.special_ring_level !== 0 && (
                <p>Lv. {item.special_ring_level}</p>
              )}
            </div>
          </div>
          {item.potential_option_grade && (
            <div
              className={`flex justify-between px-3 py-2 text-body/14px ${potentialColor}`}
            >
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
            <div
              className={`flex justify-between px-3 py-2 text-body/14px ${additionalColor}`}
            >
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
      </PopoverTrigger>
      <PopoverContent>
        <ItemDetail item={item} />
      </PopoverContent>
    </Popover>
  );
};

export default ItemCard;

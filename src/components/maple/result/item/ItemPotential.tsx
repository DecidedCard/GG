import React from "react";

import type { ItemEquipmentPreset } from "@/types/maple/item";

const ItemPotential = ({ item }: { item: ItemEquipmentPreset }) => {
  const potentialBackgroundColor =
    (item.potential_option_grade === "레어" && "bg-blue-400") ||
    (item.potential_option_grade === "에픽" && "bg-violet-500") ||
    (item.potential_option_grade === "유니크" && "bg-yellow-300") ||
    (item.potential_option_grade === "레전드리" && "bg-green-300");

  const additionalPotentialBackgroundColor =
    (item.additional_potential_option_grade === "레어" && "bg-blue-400") ||
    (item.additional_potential_option_grade === "에픽" && "bg-violet-500") ||
    (item.additional_potential_option_grade === "유니크" && "bg-yellow-300") ||
    (item.additional_potential_option_grade === "레전드리" && "bg-green-300");

  return (
    <>
      {item.potential_option_grade && (
        <div className="flex flex-col gap-1 py-2 px-4 w-full text-body/14px border-t border-solid border-gray-400">
          <p className="flex items-center gap-2">
            <span
              className={`flex justify-center items-center w-6 h-5 rounded ${potentialBackgroundColor}`}
            >
              {(item.potential_option_grade === "레어" && "R") ||
                (item.potential_option_grade === "에픽" && "E") ||
                (item.potential_option_grade === "유니크" && "U") ||
                (item.potential_option_grade === "레전드리" && "L")}
            </span>
            잠재 옵션
          </p>
          <p>{item.potential_option_1}</p>
          <p>{item.potential_option_2}</p>
          <p>{item.potential_option_3}</p>
        </div>
      )}
      {item.additional_potential_option_grade && (
        <div className="flex flex-col gap-1 py-2 px-4 w-full text-body/14px border-t border-solid border-gray-400">
          <p className="flex items-center gap-2">
            <span
              className={`flex justify-center items-center w-6 h-5 rounded ${additionalPotentialBackgroundColor}`}
            >
              {(item.additional_potential_option_grade === "레어" && "R") ||
                (item.additional_potential_option_grade === "에픽" && "E") ||
                (item.additional_potential_option_grade === "유니크" && "U") ||
                (item.additional_potential_option_grade === "레전드리" && "L")}
            </span>
            에디셔널 잠재 옵션
          </p>
          <p>{item.additional_potential_option_1}</p>
          <p>{item.additional_potential_option_2}</p>
          <p>{item.additional_potential_option_3}</p>
        </div>
      )}
      {item.item_exceptional_option.exceptional_upgrade && (
        <div className="flex flex-col gap-1 py-2 px-4 w-full text-body/14px border-t border-solid border-gray-400">
          <p className="flex items-center gap-2">
            <span className="flex justify-center items-center w-6 h-5 rounded bg-accent-300">
              EX
            </span>
            익셉셔널 강화
          </p>
          <p>올스탯 : +{item.item_exceptional_option.str}</p>
          <p>최대 HP / 최대 MP : +{item.item_exceptional_option.max_hp}</p>
          <p>공격력 / 마력 : +{item.item_exceptional_option.attack_power}</p>
          <p>익셉셔널 강화 1회 적용 (최대 1회 강화 가능)</p>
        </div>
      )}
    </>
  );
};

export default ItemPotential;

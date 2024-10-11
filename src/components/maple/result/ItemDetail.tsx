import React from "react";

import type { ItemEquipmentPreset } from "@/types/maple/item";
import StarForceCheck from "../StarForceCheck";
import Image from "next/image";

const ItemDetail = ({ item }: { item: ItemEquipmentPreset }) => {
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
        {item.item_total_option.max_hp !== "0" && (
          <p>최대HP: +{item.item_total_option.max_hp}</p>
        )}
        {item.item_total_option.max_mp !== "0" && (
          <p>최대MP: +{item.item_total_option.max_mp}</p>
        )}
        {item.item_total_option.attack_power !== "0" && (
          <p>공격력: +{item.item_total_option.attack_power}</p>
        )}
        {item.item_total_option.magic_power !== "0" && (
          <p>마력: +{item.item_total_option.magic_power}</p>
        )}
        {item.item_total_option.armor !== "0" && (
          <p>방어력: +{item.item_total_option.armor}</p>
        )}
        {item.item_total_option.boss_damage !== "0" && (
          <p>
            보스 몬스터 공격시 데미지: +{item.item_total_option.boss_damage}%
          </p>
        )}
        {item.item_total_option.ignore_monster_armor !== "0" && (
          <p>
            몬스터 방어율 무시: +{item.item_total_option.ignore_monster_armor}
          </p>
        )}
        {item.item_total_option.damage !== "0" && (
          <p>데미지: +{item.item_total_option.damage}%</p>
        )}
        {item.item_total_option.all_stat !== "0" && (
          <p>올스탯: +{item.item_total_option.all_stat}%</p>
        )}
        <p>업그레이드 가능 횟수: {item.scroll_upgradeable_count}</p>
      </div>
    </div>
  );
};

export default ItemDetail;

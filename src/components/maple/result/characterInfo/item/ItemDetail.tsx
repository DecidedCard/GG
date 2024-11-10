import React from "react";

import type { ItemEquipmentPreset } from "@/types/maple/item";
import StarForceCheck from "../../StarForceCheck";
import Image from "next/image";
import ItemStat from "./ItemStat";
import ItemPotential from "./ItemPotential";

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
    <div className="flex flex-col items-center gap-1 py-4 w-[300px] bg-bg-300 text-white rounded-lg">
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
        <p className="text-body/14px text-yellow-300">
          REQ LEV : {item.item_base_option.base_equipment_level}
        </p>
      </div>
      <div className="flex flex-col gap-1 p-4 w-full text-body/14px border-t border-solid border-gray-500">
        <p>장비분류: {item.item_equipment_part}</p>
        {item.item_total_option.str !== "0" && (
          <ItemStat item={item} value="str" />
        )}
        {item.item_total_option.dex !== "0" && (
          <ItemStat item={item} value="dex" />
        )}
        {item.item_total_option.int !== "0" && (
          <ItemStat item={item} value="int" />
        )}
        {item.item_total_option.luk !== "0" && (
          <ItemStat item={item} value="luk" />
        )}
        {item.item_total_option.max_hp !== "0" && (
          <ItemStat item={item} value="max_hp" />
        )}
        {item.item_total_option.max_mp !== "0" && (
          <ItemStat item={item} value="max_mp" />
        )}
        {item.item_total_option.attack_power !== "0" && (
          <ItemStat item={item} value="attack_power" />
        )}
        {item.item_total_option.magic_power !== "0" && (
          <ItemStat item={item} value="magic_power" />
        )}
        {item.item_total_option.armor !== "0" && (
          <ItemStat item={item} value="armor" />
        )}
        {item.item_total_option.boss_damage !== "0" && (
          <ItemStat item={item} value="boss_damage" />
        )}
        {item.item_total_option.ignore_monster_armor !== "0" && (
          <ItemStat item={item} value="ignore_monster_armor" />
        )}
        {item.item_total_option.damage !== "0" && (
          <ItemStat item={item} value="damage" />
        )}
        {item.item_total_option.all_stat !== "0" && (
          <ItemStat item={item} value="all_stat" />
        )}
        {item.scroll_upgrade === "0" &&
        item.scroll_upgradeable_count === "0" ? (
          false
        ) : (
          <>
            <p className="flex gap-1">
              업그레이드 가능 횟수 : {item.scroll_upgradeable_count}
              <span className="text-yellow-300">
                (복구 가능 횟수 : {item.scroll_resilience_count})
              </span>
            </p>
            <p>{item.golden_hammer_flag === "적용" && "황금망치 제련 적용"}</p>
          </>
        )}
        {parseInt(item.cuttable_count) <= 10 && (
          <p>가위 사용 가능 횟수 : {item.cuttable_count}회</p>
        )}
      </div>
      <ItemPotential item={item} />
      {item.soul_name && (
        <div className="p-4 w-full border-t border-solid border-gray-400">
          <p>{item.soul_name}</p>
          <p>{item.soul_option}</p>
        </div>
      )}
    </div>
  );
};

export default ItemDetail;

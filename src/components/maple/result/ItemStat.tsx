import React from "react";

import type {
  ItemAddOption,
  ItemBaseOption,
  ItemEquipmentPreset,
  ItemEtcOption,
  ItemTotalOption,
} from "@/types/maple/item";

type ItemStatValue =
  | "str"
  | "dex"
  | "int"
  | "luk"
  | "max_hp"
  | "max_mp"
  | "attack_power"
  | "magic_power"
  | "armor"
  | "speed"
  | "jump"
  | "boss_damage"
  | "ignore_monster_armor"
  | "all_stat"
  | "damage"
  | "equipment_level_decrease"
  | "max_hp_rate"
  | "max_mp_rate";

type ItemStatValueEtc = keyof ItemEtcOption;
type ItemStatValueBase = keyof ItemBaseOption;
type ItemStatValueAdd = keyof ItemAddOption;
type ItemStatValueTotal = keyof ItemTotalOption;

const ItemStat = ({
  item,
  value,
}: {
  item: ItemEquipmentPreset;
  value: ItemStatValue; // 여전히 동일한 타입을 사용
}) => {
  const title =
    (value === "max_hp" && "최대 HP") ||
    (value === "max_mp" && "최대 MP") ||
    (value === "all_stat" && "올스탯") ||
    (value === "armor" && "방어력") ||
    (value === "attack_power" && "공격력") ||
    (value === "magic_power" && "마력") ||
    (value === "boss_damage" && "보스 몬스터 공격시 데미지") ||
    (value === "ignore_monster_armor" && "몬스터 방어율 무시") ||
    value.toUpperCase();

  return (
    <div className="flex gap-1">
      <p>
        {title} : +{item.item_total_option[value as ItemStatValueTotal]}
      </p>
      {(item.item_add_option[value as ItemStatValueAdd] !== "0" ||
        item.item_etc_option[value as ItemStatValueEtc] !== "0" ||
        item.item_starforce_option[value as ItemStatValueEtc] !== "0") && (
        <p>
          (<span>{item.item_base_option[value as ItemStatValueBase]}</span>
          <span className="text-green-400">
            {item.item_add_option[value as ItemStatValueAdd] !== "0" &&
              `+ ${item.item_add_option[value as ItemStatValueAdd]}`}
          </span>
          <span className="text-purple-400">
            {item.item_etc_option[value as ItemStatValueEtc] &&
              item.item_etc_option[value as ItemStatValueEtc] !== "0" &&
              `+ ${item.item_etc_option[value as ItemStatValueEtc]}`}
          </span>
          <span className="text-yellow-400">
            {item.item_starforce_option[value as ItemStatValueEtc] &&
              item.item_starforce_option[value as ItemStatValueEtc] !== "0" &&
              `+ ${item.item_starforce_option[value as ItemStatValueEtc]}`}
          </span>
          )
        </p>
      )}
    </div>
  );
};

export default ItemStat;

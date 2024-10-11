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
  console.log(value);

  return (
    <div className="flex gap-1">
      <p>
        {value.toUpperCase()} : +
        {item.item_total_option[value as ItemStatValueTotal]}
      </p>
      <p>
        ({item.item_base_option[value as ItemStatValueBase]}
        {item.item_add_option[value as ItemStatValueAdd] !== "0" &&
          `+ ${item.item_add_option[value as ItemStatValueAdd]}`}
        {item.item_etc_option[value as ItemStatValueEtc] !== "0" &&
          `+ ${item.item_etc_option[value as ItemStatValueEtc]}`}
        {item.item_starforce_option[value as ItemStatValueEtc] !== "0" &&
          `+ ${item.item_starforce_option[value as ItemStatValueEtc]}`}
        )
      </p>
    </div>
  );
};

export default ItemStat;

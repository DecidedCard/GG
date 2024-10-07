import React, { useState } from "react";
import Image from "next/image";

import formatItemStat from "@/util/maple/formatItemStat";

import type {
  Item,
  ItemEquipment,
  ItemEquipmentPreset,
} from "@/types/maple/item";

const ItemList = ({ item }: { item: Item }) => {
  const [isView, setIsView] = useState(false);
  const [preset, setPreset] = useState<ItemEquipmentPreset[] | ItemEquipment[]>(
    item.item_equipment
  );

  const onClickToggle = () => {
    setIsView(!isView);
  };

  const onClickSetItemHandler = (presetItem: ItemEquipmentPreset[]) => {
    if (presetItem === preset) {
      setPreset(item.item_equipment);
      return;
    }
    setPreset(presetItem);
  };

  return (
    <section className="flex flex-col gap-3 w-full">
      <div className="flex justify-end items-center gap-5 px-4 w-full h-10 text-body/14px border border-solid border-black rounded-lg">
        <p
          onClick={() => onClickSetItemHandler(item.item_equipment_preset_1)}
          className="p-1 border border-solid border-black rounded"
        >
          프리셋1
        </p>
        <p
          onClick={() => onClickSetItemHandler(item.item_equipment_preset_2)}
          className="p-1 border border-solid border-black rounded"
        >
          프리셋2
        </p>
        <p
          onClick={() => onClickSetItemHandler(item.item_equipment_preset_3)}
          className="p-1 border border-solid border-black rounded"
        >
          프리셋3
        </p>
      </div>
      <div
        className={`grid grid-cols-3 gap-4 p-4 w-full border border-solid border-black rounded-md overflow-hidden ease-in-out duration-150 md:grid-cols-2 ${
          isView ? "max-h-[1500px]" : "max-h-[500px]"
        }`}
      >
        {preset.map((item) => (
          <ul
            key={item.item_name}
            className="flex flex-col justify-center w-full h-40 border border-solid border-black rounded-lg"
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
              <div className="flex justify-between px-3 py-1 text-body/14px border-t border-solid border-gray-300">
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
              <div className="flex justify-between px-3 py-1 text-body/14px border-t border-solid border-gray-300">
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
        ))}
      </div>
      <button
        onClick={onClickToggle}
        className="w-full h-10 border border-solid border-black rounded-lg"
      >
        {isView ? "접기" : "더보기"}
      </button>
    </section>
  );
};

export default ItemList;

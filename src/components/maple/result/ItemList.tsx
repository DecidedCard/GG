import React from "react";

import ItemCard from "./ItemCard";

import useItemList from "@/hooks/maple/result/useItemList";

import type { Item } from "@/types/maple/item";

const ItemList = ({ item }: { item: Item }) => {
  const { isView, preset, checkPreset, onClickSetItemHandler, onClickToggle } =
    useItemList(item);

  return (
    <section className="flex flex-col gap-3 w-full">
      <div className="flex justify-end items-center gap-5 px-4 w-full h-10 text-body/14px border border-solid border-black rounded-lg">
        <p
          onClick={() =>
            onClickSetItemHandler({
              presetItem: item.item_equipment_preset_1,
              presetNumber: 1,
            })
          }
          className={`p-1 border border-solid border-black rounded cursor-pointer ${
            checkPreset === 1 && "bg-black text-white"
          }`}
        >
          프리셋1
        </p>
        <p
          onClick={() =>
            onClickSetItemHandler({
              presetItem: item.item_equipment_preset_2,
              presetNumber: 2,
            })
          }
          className={`p-1 border border-solid border-black rounded cursor-pointer ${
            checkPreset === 2 && "bg-black text-white"
          }`}
        >
          프리셋2
        </p>
        <p
          onClick={() =>
            onClickSetItemHandler({
              presetItem: item.item_equipment_preset_3,
              presetNumber: 3,
            })
          }
          className={`p-1 border border-solid border-black rounded cursor-pointer ${
            checkPreset === 3 && "bg-black text-white"
          }`}
        >
          프리셋3
        </p>
      </div>
      <div
        className={`grid grid-cols-3 gap-4 p-4 w-full border border-solid border-black rounded-md overflow-hidden ease-in-out duration-150 md:grid-cols-2 sm:grid-cols-1 ${
          isView ? "max-h-[4500px]" : "max-h-[500px]"
        }`}
      >
        {preset.map((i) => (
          <ItemCard key={i.item_name} item={i} />
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

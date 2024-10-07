import React from "react";

import ItemCard from "./itemCard";

import useItemList from "@/hooks/maple/result/useItemList";

import type { Item } from "@/types/maple/item";

const ItemList = ({ item }: { item: Item }) => {
  const { isView, preset, onClickSetItemHandler, onClickToggle } =
    useItemList(item);

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

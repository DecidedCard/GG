import React from "react";
import ItemCard from "./ItemCard";
import useItemList from "@/hooks/maple/result/useItemList";
import type { Item, ItemEquipmentPreset } from "@/types/maple/item"; // Item과 ItemEquipmentPreset 타입 임포트
import classNames from "classnames";

const ItemList = ({ item }: { item: Item }) => {
  const { isView, preset, checkPreset, onClickSetItemHandler, onClickToggle } =
    useItemList(item);

  // 프리셋 번호와 항목을 기반으로 버튼 핸들러를 생성하는 함수
  const handlePresetClick =
    (presetItem: ItemEquipmentPreset[], presetNumber: number) => () =>
      onClickSetItemHandler({ presetItem, presetNumber });

  return (
    <section className="flex flex-col gap-3 w-full">
      <div className="flex justify-end items-center gap-5 px-4 w-full h-14 text-body/14px bg-bg-200 rounded-lg">
        {[1, 2, 3].map((num) => (
          <p
            key={num}
            onClick={handlePresetClick(
              item[
                `item_equipment_preset_${num}` as keyof Item
              ] as ItemEquipmentPreset[],
              num
            )}
            className={classNames("p-2 rounded cursor-pointer", {
              "bg-primary-100": checkPreset === num,
            })}
          >
            프리셋{num}
          </p>
        ))}
      </div>
      <div
        className={classNames(
          "grid grid-cols-3 gap-4 p-4 w-full bg-bg-200 rounded-md overflow-hidden ease-in-out duration-150",
          {
            "max-h-[4500px]": isView,
            "max-h-[500px]": !isView,
            "md:grid-cols-2 sm:grid-cols-1": true,
          }
        )}
      >
        {preset.map((i: ItemEquipmentPreset) => (
          <ItemCard key={i.item_name} item={i} />
        ))}
      </div>
      <button
        onClick={onClickToggle}
        className="w-full h-10 bg-primary-100 rounded-lg"
      >
        {isView ? "접기" : "더보기"}
      </button>
    </section>
  );
};

export default ItemList;

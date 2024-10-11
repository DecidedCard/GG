import { useCallback, useState } from "react";

import type { Item, ItemEquipmentPreset } from "@/types/maple/item";

const useItemList = (item: Item) => {
  const [isView, setIsView] = useState(false);
  const [preset, setPreset] = useState<ItemEquipmentPreset[]>(
    (item.preset_no === 1 && item.item_equipment_preset_1) ||
      (item.preset_no === 2 && item.item_equipment_preset_2) ||
      (item.preset_no === 3 && item.item_equipment_preset_3) ||
      item.item_equipment_preset_1
  );

  const [checkPreset, setCheckPreset] = useState<number>(item.preset_no);

  const onClickToggle = useCallback(() => {
    setIsView(!isView);
  }, [isView]);

  const onClickSetItemHandler = ({
    presetItem,
    presetNumber,
  }: {
    presetItem: ItemEquipmentPreset[];
    presetNumber: number;
  }) => {
    if (presetItem === preset) {
      return;
    }
    setPreset(presetItem);
    setCheckPreset(presetNumber);
  };

  return { isView, preset, checkPreset, onClickToggle, onClickSetItemHandler };
};

export default useItemList;

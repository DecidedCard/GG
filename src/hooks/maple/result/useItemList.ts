import { useState } from "react";

import type {
  Item,
  ItemEquipment,
  ItemEquipmentPreset,
} from "@/types/maple/item";

const useItemList = (item: Item) => {
  const [isView, setIsView] = useState(false);
  const [preset, setPreset] = useState<ItemEquipmentPreset[] | ItemEquipment[]>(
    item.item_equipment
  );
  const [checkPreset, setCheckPreset] = useState(0);

  const onClickToggle = () => {
    setIsView(!isView);
  };

  const onClickSetItemHandler = ({
    presetItem,
    presetNumber,
  }: {
    presetItem: ItemEquipmentPreset[];
    presetNumber: number;
  }) => {
    if (presetItem === preset) {
      setPreset(item.item_equipment);
      setCheckPreset(0);
      return;
    }
    setPreset(presetItem);
    setCheckPreset(presetNumber);
  };

  return { isView, preset, checkPreset, onClickToggle, onClickSetItemHandler };
};

export default useItemList;

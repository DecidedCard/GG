import { useCallback, useMemo, useState } from "react";

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

  // isView 상태 변경 함수 메모이제이션
  const onClickToggle = useCallback(() => {
    setIsView((prevIsView) => !prevIsView);
  }, []);

  // presetItem 및 presetNumber가 변경될 때만 함수가 새로 생성되도록 메모이제이션
  const onClickSetItemHandler = useCallback(
    ({
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
    },
    [preset]
  );

  // 초기 preset 값을 useMemo로 메모이제이션
  const initialPreset = useMemo(() => {
    return (
      (item.preset_no === 1 && item.item_equipment_preset_1) ||
      (item.preset_no === 2 && item.item_equipment_preset_2) ||
      (item.preset_no === 3 && item.item_equipment_preset_3) ||
      item.item_equipment_preset_1
    );
  }, [item]);

  return {
    isView,
    preset,
    checkPreset,
    onClickToggle,
    onClickSetItemHandler,
    initialPreset,
  };
};

export default useItemList;

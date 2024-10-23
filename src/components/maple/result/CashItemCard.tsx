import React from "react";

import type { CashItem } from "@/types/maple/cashItem";

const CashItemCard = ({ cashItem }: { cashItem: CashItem }) => {
  const preset =
    (cashItem.preset_no === 1 && cashItem.cash_item_equipment_preset_1) ||
    (cashItem.preset_no === 2 && cashItem.cash_item_equipment_preset_2) ||
    (cashItem.preset_no === 3 && cashItem.cash_item_equipment_preset_3);

  const item = [
    ...cashItem.cash_item_equipment_base.map((i) => {
      if (preset) {
        const check = preset.filter(
          (j) => j.cash_item_equipment_part === i.cash_item_equipment_part
        );
        if (check.length !== 0) {
          return check[0];
        }
        return i;
      }
      return i;
    }),
  ];

  return (
    <div className="flex flex-col gap-4 p-5 w-56 bg-bg-100 rounded-md z-10 text-body/14px md:w-40 sm:w-fit">
      <h3 className="text-title/24px md:text-title/16px sm:text-title/12px">
        장착 캐시아이템
      </h3>
      <div className="flex flex-col gap-4 sm:grid sm:grid-cols-3">
        {item.map((item, idx) =>
          item.cash_item_equipment_part === "반지" ? (
            false
          ) : (
            <ol
              key={idx}
              className="flex justify-between md:text-body/10px sm:text-body/8px"
            >
              <span>{item.cash_item_equipment_part}</span>
              <span>{item.cash_item_name}</span>
            </ol>
          )
        )}
      </div>
    </div>
  );
};

export default CashItemCard;

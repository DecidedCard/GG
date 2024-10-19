import React from "react";

import type { CashItem } from "@/types/maple/cashItem";

const CashItemCard = ({ cashItem }: { cashItem: CashItem }) => {
  console.log(cashItem);
  return <div className="p-5 bg-bg-300 rounded-md">CashItemCard</div>;
};

export default CashItemCard;

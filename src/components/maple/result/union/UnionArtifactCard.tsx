import React from "react";

import { FaDiamond } from "react-icons/fa6";

import type { UnionArtifactCrystal } from "@/types/maple/union";
import CrystalImage from "../../CrystalImage";
import numberChangeArr from "@/util/maple/numberChangeArr";

const UnionArtifactCard = ({ item }: { item: UnionArtifactCrystal }) => {
  const levelArr = numberChangeArr(item.level);

  return (
    <div className="flex flex-col items-center gap-3 p-4 w-64 border border-solid border-text-100 rounded-lg">
      <div className="flex gap-1">
        {levelArr.map((_, idx) => (
          <FaDiamond key={idx} />
        ))}
      </div>
      <CrystalImage item={item.name} />
      <p>{item.name.slice(7)}</p>
      <div className="flex flex-col items-center">
        <p>{item.crystal_option_name_1}</p>
        <p>{item.crystal_option_name_2}</p>
        <p>{item.crystal_option_name_3}</p>
      </div>
    </div>
  );
};

export default UnionArtifactCard;

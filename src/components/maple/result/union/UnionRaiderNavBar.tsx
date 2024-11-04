import React from "react";

import type { UnionRaiderCharacterInfo } from "@/types/maple/union";

const UnionRaiderNavBar = ({
  raider,
  presetNumber,
  onClickNavHandler,
}: {
  raider: UnionRaiderCharacterInfo;
  presetNumber: 1 | 2 | 3 | 4 | 5;
  onClickNavHandler: (arg: 1 | 2 | 3 | 4 | 5) => void;
}) => {
  return (
    <nav className="flex gap-3 text-body/22px">
      {raider.union_raider_preset_1.union_block.length !== 0 && (
        <ol
          className={`p-1 rounded-lg ${presetNumber === 1 && "bg-primary-100"}`}
        >
          <button onClick={() => onClickNavHandler(1)}>프리셋1</button>
        </ol>
      )}
      {raider.union_raider_preset_2.union_block.length !== 0 && (
        <ol
          className={`p-1 rounded-lg ${presetNumber === 2 && "bg-primary-100"}`}
        >
          <button onClick={() => onClickNavHandler(2)}>프리셋2</button>
        </ol>
      )}
      {raider.union_raider_preset_3.union_block.length !== 0 && (
        <ol
          className={`p-1 rounded-lg ${presetNumber === 3 && "bg-primary-100"}`}
        >
          <button onClick={() => onClickNavHandler(3)}>프리셋3</button>
        </ol>
      )}
      {raider.union_raider_preset_4.union_block.length !== 0 && (
        <ol
          className={`p-1 rounded-lg ${presetNumber === 4 && "bg-primary-100"}`}
        >
          <button onClick={() => onClickNavHandler(4)}>프리셋4</button>
        </ol>
      )}
      {raider.union_raider_preset_5.union_block.length !== 0 && (
        <ol
          className={`p-1 rounded-lg ${presetNumber === 5 && "bg-primary-100"}`}
        >
          <button onClick={() => onClickNavHandler(5)}>프리셋5</button>
        </ol>
      )}
    </nav>
  );
};

export default UnionRaiderNavBar;

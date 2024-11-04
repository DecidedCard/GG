import { useState } from "react";

import type { UnionRaiderCharacterInfo } from "@/types/maple/union";

const useUnionRaider = (raider: UnionRaiderCharacterInfo) => {
  const raiderPreset = {
    1: raider.union_raider_preset_1,
    2: raider.union_raider_preset_2,
    3: raider.union_raider_preset_3,
    4: raider.union_raider_preset_4,
    5: raider.union_raider_preset_5,
  };
  const [presetNumber, setPresetNumber] = useState(raider.use_preset_no);
  const [preset, setPreset] = useState(raiderPreset[presetNumber]);

  preset.union_block.sort(
    (a, b) => Number(b.block_level) - Number(a.block_level)
  );

  const onClickNavHandler = (arg: 1 | 2 | 3 | 4 | 5) => {
    setPresetNumber(arg);
    setPreset(raiderPreset[arg]);
  };

  return { presetNumber, preset, onClickNavHandler };
};

export default useUnionRaider;

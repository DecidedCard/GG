import type { FinalStat } from "@/types/maple/mapleApi";

const formatCharacterStat = ({ stat_name, stat_value }: FinalStat) => {
  const statNameCheck =
    stat_name.indexOf("포스") !== -1 ||
    stat_name.indexOf("력") !== -1 ||
    stat_name.indexOf("AP") !== -1;

  if (stat_name.indexOf("초") !== -1) {
    return `${stat_value} 초`;
  }

  if (statNameCheck) {
    return stat_value;
  }

  return `${stat_value} %`;
};

export default formatCharacterStat;

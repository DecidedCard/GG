const formatItemStat = (arg: string) => {
  if (arg.indexOf("보스") !== -1) {
    return `보공${arg.slice(15)}`;
  }

  if (arg.indexOf("방어율") !== -1) {
    return `방무${arg.slice(10)}`;
  }

  if (arg.indexOf("크리티컬 데미지") !== -1) {
    return `크뎀${arg.slice(8)}`;
  }

  if (arg.indexOf("아이템") !== -1) {
    return `아획${arg.slice(7)}`;
  }

  if (arg.indexOf("메소") !== -1) {
    return `메획${arg.slice(6)}`;
  }

  if (arg.indexOf("확률") !== -1) {
    return "기타";
  }

  return arg;
};

export default formatItemStat;

const formatItemStat = (arg: string) => {
  if (arg.indexOf("보스") !== -1) {
    return `보공${arg.slice(17)}`;
  }

  if (arg.indexOf("방어율") !== -1) {
    return `방무${arg.slice(12)}`;
  }

  if (arg.indexOf("크리티컬 데미지") !== -1) {
    return `크뎀${arg.slice(10)}`;
  }

  if (arg.indexOf("9레벨") !== -1) {
    return `9렙당${arg.slice(13)}`;
  }

  if (arg.indexOf("아이템") !== -1) {
    return `아획${arg.slice(9)}`;
  }

  if (arg.indexOf("메소") !== -1) {
    return `메획${arg.slice(8)}`;
  }

  if (arg.indexOf("확률") !== -1) {
    return "기타";
  }

  const argArr = arg.split(" ");
  const index = argArr.indexOf(":");
  argArr.splice(index, 1);

  return argArr.join(" ");
};

export default formatItemStat;

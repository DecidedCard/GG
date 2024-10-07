const formatItemStat = (arg: string) => {
  if (typeof arg === "string") {
    const argArr = arg.split(" ");
    const index = argArr.indexOf(":");
    argArr.splice(index, 1);

    const result = argArr.join(" ");

    if (result.indexOf("보스") !== -1) {
      return `보공${arg.slice(17)}`;
    }

    if (result.indexOf("방어율") !== -1) {
      return `방무${arg.slice(12)}`;
    }

    if (result.indexOf("크리티컬 데미지") !== -1) {
      return `크뎀${arg.slice(10)}`;
    }

    if (result.indexOf("9레벨") !== -1) {
      return `9렙당${result.slice(12)}`;
    }

    if (result.indexOf("모든 스킬") !== -1) {
      return `쿨감${arg.slice(17, 21)}`;
    }

    if (result.indexOf("아이템") !== -1) {
      return `아획${arg.slice(9)}`;
    }

    if (result.indexOf("메소") !== -1) {
      return `메획${arg.slice(8)}`;
    }

    if (result.indexOf("확률") !== -1) {
      return "기타";
    }

    return result;
  }
};

export default formatItemStat;

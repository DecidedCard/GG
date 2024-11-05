import {
  basicCharacterInfo,
  cashItemCharacterInfo,
  fifthSkillCharacterInfo,
  itemCharacterInfo,
  popularityCharacterInfo,
  sixthSkillCharacterInfo,
  statCharacterInfo,
  symbolCharacterInfo,
  linkSkillCharacterInfo,
  unionCharacterCharacterInfo,
  unionArtifactCharacterCharacterInfo,
  unionRaiderCharacterCharacterInfo,
  getCharacterId,
} from "@/api/maple/axios";

const fetchFullCharacterInfo = async (name: string) => {
  try {
    // await new Promise((resolveOuter) => {
    //   resolveOuter(
    //     new Promise((resolveInner) => {
    //       setTimeout(resolveInner, 10000);
    //     })
    //   );
    // });

    const { ocid } = await getCharacterId(name);

    const [
      basicInfo,
      statInfo,
      popularityInfo,
      itemInfo,
      cashItemInfo,
      fifthSkillInfo,
      sixthSkillInfo,
      symbolInfo,
      linkSkill,
      union,
      unionArtifact,
      unionRaider,
    ] = await Promise.all([
      basicCharacterInfo(ocid),
      statCharacterInfo(ocid),
      popularityCharacterInfo(ocid),
      itemCharacterInfo(ocid),
      cashItemCharacterInfo(ocid),
      fifthSkillCharacterInfo(ocid),
      sixthSkillCharacterInfo(ocid),
      symbolCharacterInfo(ocid),
      linkSkillCharacterInfo(ocid),
      unionCharacterCharacterInfo(ocid),
      unionArtifactCharacterCharacterInfo(ocid),
      unionRaiderCharacterCharacterInfo(ocid),
    ]);

    return {
      basicInfo,
      statInfo,
      popularityInfo,
      itemInfo,
      cashItemInfo,
      fifthSkillInfo,
      sixthSkillInfo,
      symbolInfo,
      linkSkill,
      union,
      unionArtifact,
      unionRaider,
    };
  } catch (error) {
    return Promise.reject(error);
  }
};

export default fetchFullCharacterInfo;

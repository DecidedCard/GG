import {
  basicCharacterInfo,
  statCharacterInfo,
  popularityCharacterInfo,
  itemCharacterInfo,
  cashItemCharacterInfo,
  symbolCharacterInfo,
  linkSkillCharacterInfo,
  unionCharacterCharacterInfo,
  unionArtifactCharacterCharacterInfo,
  unionRaiderCharacterCharacterInfo,
  getCharacterId,
  SkillCharacterInfo,
} from "@/api/maple/axios";

export const fetchCharacterData = async (name: string) => {
  try {
    const { ocid } = await getCharacterId(name);

    const [
      statInfo,
      itemInfo,
      fifthSkillInfo,
      sixthSkillInfo,
      symbolInfo,
      linkSkillInfo,
      unionCharacterInfo,
      unionArtifactInfo,
      unionRaiderInfo,
      basicInfo,
      cashItemInfo,
      popularityInfo,
    ] = await Promise.all([
      statCharacterInfo(ocid),
      itemCharacterInfo(ocid),
      SkillCharacterInfo(ocid, 5),
      SkillCharacterInfo(ocid, 6),
      symbolCharacterInfo(ocid),
      linkSkillCharacterInfo(ocid),
      unionCharacterCharacterInfo(ocid),
      unionArtifactCharacterCharacterInfo(ocid),
      unionRaiderCharacterCharacterInfo(ocid),
      basicCharacterInfo(ocid),
      cashItemCharacterInfo(ocid),
      popularityCharacterInfo(ocid),
    ]);
    return {
      statInfo,
      itemInfo,
      fifthSkillInfo,
      sixthSkillInfo,
      symbolInfo,
      linkSkillInfo,
      unionCharacterInfo,
      unionArtifactInfo,
      unionRaiderInfo,
      basicInfo,
      cashItemInfo,
      popularityInfo,
    };
  } catch (error) {
    console.error("캐릭터 정보를 가져오는 도중 에러가 발생했습니다.", error);
    return Promise.reject(error);
  }
};

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
} from "@/api/maple/axios";

const fetchFullCharacterInfo = async (id: string) => {
  try {
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
      basicCharacterInfo(id),
      statCharacterInfo(id),
      popularityCharacterInfo(id),
      itemCharacterInfo(id),
      cashItemCharacterInfo(id),
      fifthSkillCharacterInfo(id),
      sixthSkillCharacterInfo(id),
      symbolCharacterInfo(id),
      linkSkillCharacterInfo(id),
      unionCharacterCharacterInfo(id),
      unionArtifactCharacterCharacterInfo(id),
      unionRaiderCharacterCharacterInfo(id),
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

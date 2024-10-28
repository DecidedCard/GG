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
      unionArtifact,
      unionRaider,
    };
  } catch (error) {
    return Promise.reject(error);
  }
};

export default fetchFullCharacterInfo;

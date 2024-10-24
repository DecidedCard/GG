import {
  basicCharacterInfo,
  cashItemCharacterInfo,
  fifthSkillCharacterInfo,
  itemCharacterInfo,
  popularityCharacterInfo,
  sixthSkillCharacterInfo,
  statCharacterInfo,
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
    ] = await Promise.all([
      basicCharacterInfo(id),
      statCharacterInfo(id),
      popularityCharacterInfo(id),
      itemCharacterInfo(id),
      cashItemCharacterInfo(id),
      fifthSkillCharacterInfo(id),
      sixthSkillCharacterInfo(id),
    ]);

    return {
      basicInfo,
      statInfo,
      popularityInfo,
      itemInfo,
      cashItemInfo,
      fifthSkillInfo,
      sixthSkillInfo,
    };
  } catch (error) {
    return Promise.reject(error);
  }
};

export default fetchFullCharacterInfo;

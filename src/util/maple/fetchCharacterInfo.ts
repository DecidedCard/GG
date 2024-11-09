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

export const fetchBasicCharacterInfo = async (name: string) => {
  try {
    const { ocid } = await getCharacterId(name);

    const [basicInfo, cashItemInfo, popularityInfo] = await Promise.all([
      basicCharacterInfo(ocid),
      cashItemCharacterInfo(ocid),
      popularityCharacterInfo(ocid),
    ]);

    return {
      basicInfo,
      cashItemInfo,
      popularityInfo,
    };
  } catch (error) {
    return Promise.reject(error);
  }
};

export const fetchCharacterInfo = async (
  name: string,
  type: "stat" | "skill" | "union"
) => {
  const { ocid } = await getCharacterId(name);

  switch (type) {
    case "stat": {
      const [statInfo, itemInfo] = await Promise.all([
        statCharacterInfo(ocid),
        itemCharacterInfo(ocid),
      ]);

      return { statInfo, itemInfo };
    }

    case "skill": {
      const [fifthSkillInfo, sixthSkillInfo, linkSkillInfo, symbolInfo] =
        await Promise.all([
          fifthSkillCharacterInfo(ocid),
          sixthSkillCharacterInfo(ocid),
          linkSkillCharacterInfo(ocid),
          symbolCharacterInfo(ocid),
        ]);

      return { fifthSkillInfo, sixthSkillInfo, linkSkillInfo, symbolInfo };
    }

    case "union": {
      const [unionCharacterInfo, unionArtifactInfo, unionRaiderInfo] =
        await Promise.all([
          unionCharacterCharacterInfo(ocid),
          unionArtifactCharacterCharacterInfo(ocid),
          unionRaiderCharacterCharacterInfo(ocid),
        ]);

      return { unionCharacterInfo, unionArtifactInfo, unionRaiderInfo };
    }
  }
};

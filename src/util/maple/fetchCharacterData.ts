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

export const fetchCharacterData = async (
  name: string,
  type?: "stat" | "skill" | "union"
) => {
  const { ocid } = await getCharacterId(name);

  switch (type) {
    case "stat":
      const [statInfo, itemInfo] = await Promise.all([
        statCharacterInfo(ocid),
        itemCharacterInfo(ocid),
      ]);
      return { statInfo, itemInfo };

    case "skill":
      const [fifthSkillInfo, sixthSkillInfo, symbolInfo, linkSkillInfo] =
        await Promise.all([
          SkillCharacterInfo(ocid, 5),
          SkillCharacterInfo(ocid, 6),
          symbolCharacterInfo(ocid),
          linkSkillCharacterInfo(ocid),
        ]);
      return { fifthSkillInfo, sixthSkillInfo, symbolInfo, linkSkillInfo };

    case "union":
      const [unionCharacterInfo, unionArtifactInfo, unionRaiderInfo] =
        await Promise.all([
          unionCharacterCharacterInfo(ocid),
          unionArtifactCharacterCharacterInfo(ocid),
          unionRaiderCharacterCharacterInfo(ocid),
        ]);
      return { unionCharacterInfo, unionArtifactInfo, unionRaiderInfo };

    default:
      const [basicInfo, cashItemInfo, popularityInfo] = await Promise.all([
        basicCharacterInfo(ocid),
        cashItemCharacterInfo(ocid),
        popularityCharacterInfo(ocid),
      ]);
      return { basicInfo, cashItemInfo, popularityInfo };
  }
};

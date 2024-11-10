import {
  basicCharacterInfo,
  statCharacterInfo,
  popularityCharacterInfo,
  itemCharacterInfo,
  cashItemCharacterInfo,
  fifthSkillCharacterInfo,
  sixthSkillCharacterInfo,
  symbolCharacterInfo,
  linkSkillCharacterInfo,
  unionCharacterCharacterInfo,
  unionArtifactCharacterCharacterInfo,
  unionRaiderCharacterCharacterInfo,
} from "@/api/maple/axios";

export const fetchCharacterData = async (ocid: string, type?: string) => {
  switch (type) {
    case "stat":
      return Promise.all([statCharacterInfo(ocid), itemCharacterInfo(ocid)]);
    case "skill":
      return Promise.all([
        fifthSkillCharacterInfo(ocid),
        sixthSkillCharacterInfo(ocid),
        symbolCharacterInfo(ocid),
        linkSkillCharacterInfo(ocid),
      ]);
    case "union":
      return Promise.all([
        unionCharacterCharacterInfo(ocid),
        unionArtifactCharacterCharacterInfo(ocid),
        unionRaiderCharacterCharacterInfo(ocid),
      ]);
    default:
      return Promise.all([
        basicCharacterInfo(ocid),
        cashItemCharacterInfo(ocid),
        popularityCharacterInfo(ocid),
      ]);
  }
};

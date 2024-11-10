// src/util/maple/fetchCharacterInfo.ts
import { getCharacterId } from "@/api/maple/axios";
import { fetchCharacterData } from "./fetchCharacterData";

// 기본 캐릭터 정보를 가져오는 함수
export const fetchBasicCharacterInfo = async (name: string) => {
  const { ocid } = await getCharacterId(name);
  const [basicInfo, cashItemInfo, popularityInfo] = await fetchCharacterData(
    ocid
  );
  return { basicInfo, cashItemInfo, popularityInfo };
};

// 특정 타입별로 캐릭터 정보를 가져오는 함수
export const fetchCharacterInfo = async (
  name: string,
  type: "stat" | "skill" | "union"
) => {
  const { ocid } = await getCharacterId(name);
  const data = await fetchCharacterData(ocid, type);

  // 타입에 따라 반환되는 데이터 구조 정의
  switch (type) {
    case "stat":
      return { statInfo: data[0], itemInfo: data[1] };
    case "skill":
      return {
        fifthSkillInfo: data[0],
        sixthSkillInfo: data[1],
        symbolInfo: data[2],
        linkSkillInfo: data[3],
      };
    case "union":
      return {
        unionCharacterInfo: data[0],
        unionArtifactInfo: data[1],
        unionRaiderInfo: data[2],
      };
    default:
      return null;
  }
};

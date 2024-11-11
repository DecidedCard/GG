import axios from "axios";

import type {
  Basic,
  CharacterId,
  CharacterStatInfo,
  CharacterSymbol,
  Popularity,
} from "@/types/maple/mapleApi";
import type { Item } from "@/types/maple/item";
import type { CashItem } from "@/types/maple/cashItem";
import type { LinkSkill, Skill } from "@/types/maple/skill";
import type {
  UnionArtifactCharacterInfo,
  UnionCharacterInfo,
  UnionRaiderCharacterInfo,
} from "@/types/maple/union";

const apiKey = process.env.NEXT_PUBLIC_NEXON_API_1;

const baseURL = "https://open.api.nexon.com";

const maple = axios.create({
  baseURL: baseURL,
  headers: { "x-nxopen-api-key": apiKey },
});

export const getCharacterId = async (name: string): Promise<CharacterId> => {
  try {
    const res = await maple.get(`/maplestory/v1/id?character_name=${name}`);
    return res.data;
  } catch (error) {
    console.error("캐릭터 id를 가져오는 중에 오류가 발생했습니다.", error);
    return Promise.reject(new Error("캐릭터의 id를 가져오는데 실패했습니다."));
  }
};

export const basicCharacterInfo = async (id: string): Promise<Basic> => {
  try {
    const res = await maple.get(`/maplestory/v1/character/basic?ocid=${id}`);
    return res.data;
  } catch (error) {
    console.error("캐릭터의 기본정보를 가져오는데 실패했습니다.", error);
    return Promise.reject(
      new Error("캐릭터의 기본정보를 가져오는데 실패했습니다.")
    );
  }
};

export const popularityCharacterInfo = async (
  id: string
): Promise<Popularity> => {
  try {
    const res = await maple.get(
      `/maplestory/v1/character/popularity?ocid=${id}`
    );
    return res.data;
  } catch (error) {
    console.error("캐릭터의 인기도 정보를 가져오는데 실패했습니다.", error);
    return Promise.reject(
      new Error("캐릭터의 인기도 정보를 가져오는데 실패했습니다.")
    );
  }
};

export const statCharacterInfo = async (
  id: string
): Promise<CharacterStatInfo> => {
  try {
    const res = await maple.get(`/maplestory/v1/character/stat?ocid=${id}`);
    return res.data;
  } catch (error) {
    console.error("캐릭터의 상세스탯 정보를 가져오는데 실패했습니다", error);
    return Promise.reject(
      new Error("캐릭터의 상세스탯 정보를 가져오는데 실패했습니다.")
    );
  }
};

export const itemCharacterInfo = async (id: string): Promise<Item> => {
  try {
    const res = await maple.get(
      `/maplestory/v1/character/item-equipment?ocid=${id}`
    );
    return res.data;
  } catch (error) {
    console.error("캐릭터의 아이템 정보를 가져오는데 실패하였습니다.", error);
    return Promise.reject(
      new Error("캐릭터의 아이템 정보를 가져오는데 실패하였습니다.")
    );
  }
};

export const cashItemCharacterInfo = async (id: string): Promise<CashItem> => {
  try {
    const res = await maple.get(
      `/maplestory/v1/character/cashitem-equipment?ocid=${id}`
    );
    return res.data;
  } catch (error) {
    console.error(
      "캐릭터의 캐시아이템 정보를 가져오는데 실패하였습니다.",
      error
    );
    return Promise.reject(
      "캐릭터의 캐시아이템 정보를 가져오는데 실패하였습니다."
    );
  }
};

export const SkillCharacterInfo = async (
  id: string,
  number: number
): Promise<Skill> => {
  try {
    const res = await maple.get(
      `/maplestory/v1/character/skill?ocid=${id}&character_skill_grade=${number}`
    );
    return res.data;
  } catch (error) {
    console.error("캐릭터의 스킬 정보를 가져오는데 실패하였습니다.", error);
    return Promise.reject(
      new Error("캐릭터의 스킬 정보를 가져오는데 실패하였습니다.")
    );
  }
};

export const symbolCharacterInfo = async (
  id: string
): Promise<CharacterSymbol> => {
  try {
    const res = await maple.get(
      `/maplestory/v1/character/symbol-equipment?ocid=${id}`
    );
    return res.data;
  } catch (error) {
    console.error("캐릭터의 심볼 정보를 가져오는데 실패하였습니다.", error);
    return Promise.reject(
      new Error("캐릭터의 심볼 정보를 가져오는데 실패하였습니다.")
    );
  }
};

export const linkSkillCharacterInfo = async (
  id: string
): Promise<LinkSkill> => {
  try {
    const res = await maple.get(
      `/maplestory/v1/character/link-skill?ocid=${id}`
    );
    return res.data;
  } catch (error) {
    console.error("캐릭터의 링크스킬 정보를 가져오는데 실패하였습니다.", error);
    return Promise.reject(
      new Error("캐릭터의 링크스킬 정보를 가져오는데 실패하였습니다.")
    );
  }
};

export const unionCharacterCharacterInfo = async (
  id: string
): Promise<UnionCharacterInfo> => {
  try {
    const res = await maple.get(`/maplestory/v1/user/union?ocid=${id}`);
    return res.data;
  } catch (error) {
    console.error("캐릭터의 유니온 정보를 가져오는데 실패하였습니다.", error);
    return Promise.reject(
      new Error("캐릭터의 유니온 정보를 가져오는데 실패하였습니다.")
    );
  }
};

export const unionArtifactCharacterCharacterInfo = async (
  id: string
): Promise<UnionArtifactCharacterInfo> => {
  try {
    const res = await maple.get(
      `/maplestory/v1/user/union-artifact?ocid=${id}`
    );
    return res.data;
  } catch (error) {
    console.error(
      "캐릭터의 유니온 아티팩트 정보를 가져오는데 실패하였습니다.",
      error
    );
    return Promise.reject(
      "캐릭터의 유니온 아티팩트 정보를 가져오는데 실패하였습니다."
    );
  }
};

export const unionRaiderCharacterCharacterInfo = async (
  id: string
): Promise<UnionRaiderCharacterInfo> => {
  try {
    const res = await maple.get(`/maplestory/v1/user/union-raider?ocid=${id}`);
    return res.data;
  } catch (error) {
    console.error(
      "캐릭터의 유니온 공격대 정보를 가져오는데 실패하였습니다.",
      error
    );
    return Promise.reject(
      new Error("캐릭터의 유니온 공격대 정보를 가져오는데 실패하였습니다.")
    );
  }
};

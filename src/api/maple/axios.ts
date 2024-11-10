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
  const res = await maple.get(`/maplestory/v1/id?character_name=${name}`);
  return res.data;
};

export const basicCharacterInfo = async (id: string): Promise<Basic> => {
  const res = await maple.get(`/maplestory/v1/character/basic?ocid=${id}`);
  return res.data;
};

export const popularityCharacterInfo = async (
  id: string
): Promise<Popularity> => {
  const res = await maple.get(`/maplestory/v1/character/popularity?ocid=${id}`);
  return res.data;
};

export const statCharacterInfo = async (
  id: string
): Promise<CharacterStatInfo> => {
  const res = await maple.get(`/maplestory/v1/character/stat?ocid=${id}`);
  return res.data;
};

export const itemCharacterInfo = async (id: string): Promise<Item> => {
  const res = await maple.get(
    `/maplestory/v1/character/item-equipment?ocid=${id}`
  );
  return res.data;
};

export const cashItemCharacterInfo = async (id: string): Promise<CashItem> => {
  const res = await maple.get(
    `/maplestory/v1/character/cashitem-equipment?ocid=${id}`
  );
  return res.data;
};

export const fifthSkillCharacterInfo = async (id: string): Promise<Skill> => {
  const res = await maple.get(
    `/maplestory/v1/character/skill?ocid=${id}&character_skill_grade=5`
  );
  return res.data;
};

export const sixthSkillCharacterInfo = async (id: string): Promise<Skill> => {
  const res = await maple.get(
    `/maplestory/v1/character/skill?ocid=${id}&character_skill_grade=6`
  );
  return res.data;
};

export const symbolCharacterInfo = async (
  id: string
): Promise<CharacterSymbol> => {
  const res = await maple.get(
    `/maplestory/v1/character/symbol-equipment?ocid=${id}`
  );
  return res.data;
};

export const linkSkillCharacterInfo = async (
  id: string
): Promise<LinkSkill> => {
  const res = await maple.get(`/maplestory/v1/character/link-skill?ocid=${id}`);
  return res.data;
};

export const unionCharacterCharacterInfo = async (
  id: string
): Promise<UnionCharacterInfo> => {
  const res = await maple.get(`/maplestory/v1/user/union?ocid=${id}`);
  return res.data;
};

export const unionArtifactCharacterCharacterInfo = async (
  id: string
): Promise<UnionArtifactCharacterInfo> => {
  const res = await maple.get(`/maplestory/v1/user/union-artifact?ocid=${id}`);
  return res.data;
};

export const unionRaiderCharacterCharacterInfo = async (
  id: string
): Promise<UnionRaiderCharacterInfo> => {
  const res = await maple.get(`/maplestory/v1/user/union-raider?ocid=${id}`);
  return res.data;
};

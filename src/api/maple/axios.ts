import axios from "axios";

import type {
  Basic,
  CharacterId,
  CharacterStatInfo,
  Popularity,
} from "@/types/maple/mapleApi";

const apiKey = process.env.NEXT_PUBLIC_NEXON_API_1;

const baseURL = "https://open.api.nexon.com";

const maple = axios.create({
  baseURL: baseURL,
  headers: { "x-nxopen-api-key": apiKey },
});

export const getCharacterId = async (name: string): Promise<CharacterId> => {
  try {
    const res = await maple.get(`/maplestory/v1/id?character_name=${name}`);
    localStorage.setItem("character_id", res.data.ocid);
    return res.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const basicCharacterInfo = async (id: string): Promise<Basic> => {
  try {
    const res = await maple.get(`/maplestory/v1/character/basic?ocid=${id}`);
    return res.data;
  } catch (error) {
    return Promise.reject(error);
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
    return Promise.reject(error);
  }
};

export const statCharacterInfo = async (
  id: string
): Promise<CharacterStatInfo> => {
  try {
    const res = await maple.get(`/maplestory/v1/character/stat?ocid=${id}`);
    return res.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

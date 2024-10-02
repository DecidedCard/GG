import axios from "axios";

import formatDate from "@/util/formatDate";

const apiKey = process.env.NEXT_PUBLIC_NEXON_API_1;

const today = formatDate(new Date());

const baseURL = "https://open.api.nexon.com";

const maple = axios.create({
  baseURL: baseURL,
  headers: { "x-nxopen-api-key": apiKey },
});

export const getCharacterId = async (name: string) => {
  try {
    const res = await maple.get(`/maplestory/v1/id?character_name=${name}`);
    return res.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

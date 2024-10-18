import formatDate from "@/util/formatDate";
import timeCheck from "@/util/timeCheck";

import type {
  ResponseDojangRanking,
  ResponseOverallRanking,
  ResponseSeedRanking,
  ResponseUnionRanking,
} from "@/types/maple/mapleApi";

const apiKey = process.env.NEXT_PUBLIC_NEXON_API_1;
const baseURL = "https://open.api.nexon.com";
const revalidate = 60 * 60 * 2;

//ISR을 사용하기 위해 fetch를 활용해서 작성
export const overallRanking = async (): Promise<ResponseOverallRanking> => {
  const today = timeCheck(formatDate(new Date()), "08-30");

  try {
    const res = await fetch(
      `${baseURL}/maplestory/v1/ranking/overall?date=${today}`,
      {
        headers: { "x-nxopen-api-key": apiKey } as HeadersInit,
        next: { revalidate },
      }
    );
    return await res.json();
  } catch (error) {
    return Promise.reject(error);
  }
};

export const RebootOverallRanking =
  async (): Promise<ResponseOverallRanking> => {
    const today = timeCheck(formatDate(new Date()), "08-30");
    try {
      const res = await fetch(
        `${baseURL}/maplestory/v1/ranking/overall?date=${today}&world_type=1`,
        {
          headers: { "x-nxopen-api-key": apiKey } as HeadersInit,
          next: { revalidate },
        }
      );
      return await res.json();
    } catch (error) {
      return Promise.reject(error);
    }
  };

export const unionRanking = async (): Promise<ResponseUnionRanking> => {
  const today = timeCheck(formatDate(new Date()), "08-30");
  try {
    const res = await fetch(
      `${baseURL}/maplestory/v1/ranking/union?date=${today}`,
      {
        headers: { "x-nxopen-api-key": apiKey } as HeadersInit,
        next: { revalidate },
      }
    );
    return await res.json();
  } catch (error) {
    return Promise.reject(error);
  }
};

export const dojangRanking = async (): Promise<ResponseDojangRanking> => {
  const today = timeCheck(formatDate(new Date()), "08-30");
  try {
    const res = await fetch(
      `${baseURL}/maplestory/v1/ranking/dojang?date=${today}&difficulty=1`,
      {
        headers: { "x-nxopen-api-key": apiKey } as HeadersInit,
        next: { revalidate },
      }
    );
    return await res.json();
  } catch (error) {
    return Promise.reject(error);
  }
};

export const seedRanking = async (): Promise<ResponseSeedRanking> => {
  const today = timeCheck(formatDate(new Date()), "08-30");
  try {
    const res = await fetch(
      `${baseURL}/maplestory/v1/ranking/theseed?date=${today}`,
      {
        headers: { "x-nxopen-api-key": apiKey } as HeadersInit,
        next: { revalidate },
      }
    );
    return await res.json();
  } catch (error) {
    return Promise.reject(error);
  }
};

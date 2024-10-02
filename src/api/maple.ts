import formatDate from "@/util/formatDate";
import axios from "axios";

const apiKey = process.env.NEXT_PUBLIC_NEXON_API_1;

const today = formatDate(new Date());

const baseURL = "https://open.api.nexon.com";

const maple = axios.create({
  baseURL: baseURL,
  headers: { "x-nxopen-api-key": apiKey },
});

//isr을 사용하기 위해 fetch를 활용해서 작성
export const overallRanking = async () => {
  try {
    const res = await fetch(
      `${baseURL}/maplestory/v1/ranking/overall?date=${today}`,
      {
        headers: { "x-nxopen-api-key": apiKey } as HeadersInit,
        next: { revalidate: 60 * 60 * 24 },
      }
    );
    return await res.json();
  } catch (error) {
    Promise.reject(error);
  }
};

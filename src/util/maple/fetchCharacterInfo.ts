import {
  basicCharacterInfo,
  popularityCharacterInfo,
  statCharacterInfo,
} from "@/api/maple/axios";

const fetchFullCharacterInfo = async (id: string) => {
  try {
    const [basicInfo, statInfo, popularityInfo] = await Promise.all([
      basicCharacterInfo(id),
      statCharacterInfo(id),
      popularityCharacterInfo(id),
    ]);

    return { basicInfo, statInfo, popularityInfo };
  } catch (error) {
    console.error("Error fetching character info:", error);
    return Promise.reject(error);
  }
};

export default fetchFullCharacterInfo;

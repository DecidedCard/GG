import {
  basicCharacterInfo,
  itemCharacterInfo,
  popularityCharacterInfo,
  statCharacterInfo,
} from "@/api/maple/axios";

const fetchFullCharacterInfo = async (id: string) => {
  try {
    const [basicInfo, statInfo, popularityInfo, itemInfo] = await Promise.all([
      basicCharacterInfo(id),
      statCharacterInfo(id),
      popularityCharacterInfo(id),
      itemCharacterInfo(id),
    ]);

    return { basicInfo, statInfo, popularityInfo, itemInfo };
  } catch (error) {
    console.error("Error fetching character info:", error);
    return Promise.reject(error);
  }
};

export default fetchFullCharacterInfo;

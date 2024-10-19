import {
  basicCharacterInfo,
  cashItemCharacterInfo,
  itemCharacterInfo,
  popularityCharacterInfo,
  statCharacterInfo,
} from "@/api/maple/axios";

const fetchFullCharacterInfo = async (id: string) => {
  try {
    const [basicInfo, statInfo, popularityInfo, itemInfo, cashItemInfo] =
      await Promise.all([
        basicCharacterInfo(id),
        statCharacterInfo(id),
        popularityCharacterInfo(id),
        itemCharacterInfo(id),
        cashItemCharacterInfo(id),
      ]);

    return { basicInfo, statInfo, popularityInfo, itemInfo, cashItemInfo };
  } catch (error) {
    console.error("Error fetching character info:", error);
    return Promise.reject(error);
  }
};

export default fetchFullCharacterInfo;

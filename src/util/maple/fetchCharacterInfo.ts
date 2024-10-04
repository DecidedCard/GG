import { basicCharacterInfo, statCharacterInfo } from "@/api/maple/axios";

const fetchFullCharacterInfo = async (id: string) => {
  try {
    // 두 개의 비동기 함수를 Promise 배열로 전달
    const [basicInfo, statInfo] = await Promise.all([
      basicCharacterInfo(id),
      statCharacterInfo(id),
    ]);

    // 데이터를 객체 형태로 묶어서 반환
    return { basicInfo, statInfo };
  } catch (error) {
    console.error("Error fetching character info:", error);
    return Promise.reject(error);
  }
};

export default fetchFullCharacterInfo;

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { getCharacterId } from "@/api/maple/axios";
import { useCharacterQuery } from "../useQuery";

const useResult = () => {
  const [characterId, setCharacterId] = useState("");
  const { data, isError, isFetching } = useCharacterQuery(characterId);

  const params = useSearchParams();
  const characterName = params.get("character_name") as string;

  useEffect(() => {
    const localStorageCharacterId = localStorage.getItem("character_id");
    const localStorageCharacterName = localStorage.getItem("character_name");

    const CharacterId = async (name: string) => {
      try {
        const res = await getCharacterId(name);
        setCharacterId(res.ocid);
      } catch (error) {
        console.error(error);
        alert("캐릭터 정보를 가져오는데 실패하였습니다.");
      }
    };

    if (localStorageCharacterName === characterName) {
      if (localStorageCharacterId) {
        setCharacterId(localStorageCharacterId);
      } else {
        CharacterId(localStorageCharacterName);
      }
    } else {
      console.log("검색결과가 다릅니다.");
      CharacterId(characterName);
    }
  }, [characterName]);

  const query = {
    data,
    isError,
    isFetching,
  };

  return { query };
};

export default useResult;

import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

import { useCharacterQuery } from "../useQuery";

import { getCharacterId } from "@/api/maple/axios";

const useResult = () => {
  const [characterId, setCharacterId] = useState("");
  const { data, isError, isFetching } = useCharacterQuery(characterId);

  const params = useSearchParams();
  const characterName = params.get("character_name") as string;

  const memoizedCharacterId = useMemo(() => {
    const cache = new Map();

    return async (name: string) => {
      if (cache.has(name)) {
        return cache.get(name);
      }
      try {
        const res = await getCharacterId(name);
        cache.set(name, res.ocid);
        return res.ocid;
      } catch (error) {
        console.error(error);
        alert("캐릭터 정보를 가져오는데 실패하였습니다.");
      }
    };
  }, []);

  useEffect(() => {
    const localStorageCharacterId = localStorage.getItem("character_id");
    const localStorageCharacterName = localStorage.getItem("character_name");

    const fetchCharacterId = async (name: string) => {
      const id = await memoizedCharacterId(name);
      if (id) {
        setCharacterId(id);
      }
    };

    if (localStorageCharacterName === characterName) {
      if (localStorageCharacterId) {
        setCharacterId(localStorageCharacterId);
      } else {
        fetchCharacterId(localStorageCharacterName);
      }
    } else {
      fetchCharacterId(characterName);
    }
  }, [characterName, memoizedCharacterId]);

  const query = {
    data,
    isError,
    isFetching,
  };

  return { query };
};

export default useResult;

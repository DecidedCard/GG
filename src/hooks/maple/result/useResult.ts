import { useCallback, useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

import { useCharacterQuery } from "../useQuery";

import { getCharacterId } from "@/api/maple/axios";

export type Info = "stat" | "skill";

const useResult = () => {
  const [characterId, setCharacterId] = useState("");
  const [info, setInfo] = useState<Info>("stat");

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

  const onClickCharacterInfoSet = useCallback((arg: Info) => {
    setInfo(arg);
  }, []);

  const query = {
    data,
    isError,
    isFetching,
  };

  return { info, query, onClickCharacterInfoSet };
};

export default useResult;

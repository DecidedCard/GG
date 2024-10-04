import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { getCharacterId } from "@/api/maple/axios";

const useResult = () => {
  const [characterId, setCharacterId] = useState("");

  const params = useSearchParams();
  const characterName = params.get("character_name") as string;

  useEffect(() => {
    const localStorageCharacterId = localStorage.getItem("characterId");

    const CharacterId = async () => {
      try {
        const res = await getCharacterId(characterName);
        setCharacterId(res.ocid);
      } catch (error) {
        console.error(error);
        alert("캐릭터 정보를 가져오는데 실패하였습니다.");
      }
    };

    if (localStorageCharacterId) {
      setCharacterId(localStorageCharacterId);
    } else {
      CharacterId();
    }
  }, [characterName]);

  return { characterName };
};

export default useResult;

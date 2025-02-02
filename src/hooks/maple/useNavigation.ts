import { useRouter } from "next/navigation";
import { useCallback } from "react";

type CharacterInfoType = "stat" | "skill" | "union";

const useCharacterNavigation = () => {
  const router = useRouter();

  const navigationToCharacterInfo = useCallback(
    (characterName: string, type: CharacterInfoType) => {
      const path = `/maple/result?character_name=${characterName}&type=${type}`;
      router.push(path);
    },
    [router]
  );

  return { navigationToCharacterInfo };
};

export default useCharacterNavigation;

import { useCallback } from "react";
import { useSearchParams } from "next/navigation";

import useCharacterNavigation from "../useNavigation";
import { useBasicCharacterQuery } from "../useQuery";

export type Info = "stat" | "skill" | "union";

const useResult = () => {
  const params = useSearchParams();
  const characterName = params.get("character_name") as string;

  const { navigationToCharacterInfo } = useCharacterNavigation();

  const { data, isError, isFetching } = useBasicCharacterQuery(characterName);

  const onClickCharacterInfoSet = useCallback(
    (arg: Info) => {
      navigationToCharacterInfo(characterName, arg);
    },
    [navigationToCharacterInfo, characterName]
  );

  const query = {
    data,
    isError,
    isFetching,
  };

  return { query, onClickCharacterInfoSet };
};

export default useResult;

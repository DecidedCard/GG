import { useCallback } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import { useBasicCharacterQuery } from "../useQuery";

export type Info = "stat" | "skill" | "union";

const useResult = () => {
  const params = useSearchParams();
  const characterName = params.get("character_name") as string;

  const navigation = useRouter();

  const { data, isError, isFetching } = useBasicCharacterQuery(characterName);

  const onClickCharacterInfoSet = useCallback(
    (arg: Info) => {
      navigation.push(`/maple/result/${arg}?character_name=${characterName}`);
    },
    [navigation, characterName]
  );

  const query = {
    data,
    isError,
    isFetching,
  };

  return { query, onClickCharacterInfoSet };
};

export default useResult;

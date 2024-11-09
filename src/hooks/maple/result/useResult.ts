import { useCallback, useState } from "react";
import { useSearchParams } from "next/navigation";

import { useBasicCharacterQuery } from "../useQuery";

export type Info = "stat" | "skill" | "union";

const useResult = () => {
  const [info, setInfo] = useState<Info>("stat");

  const params = useSearchParams();
  const characterName = params.get("character_name") as string;

  const { data, isError, isFetching } = useBasicCharacterQuery(characterName);

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

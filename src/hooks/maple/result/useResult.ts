import { useSearchParams } from "next/navigation";

import { useBasicCharacterQuery } from "../useQuery";

const useResult = () => {
  const params = useSearchParams();
  const characterName = params.get("character_name") as string;

  const { data, isError } = useBasicCharacterQuery(characterName);

  const query = {
    data,
    isError,
  };

  return { query };
};

export default useResult;

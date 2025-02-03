import { useSuspenseQuery } from "@tanstack/react-query";

import QUERY_KEY from "@/util/maple/QUERY_KEY";
import { fetchCharacterData } from "@/util/maple/fetchCharacterData";

export const useCharacterQuery = (id: string) => {
  const { data, isError, error } = useSuspenseQuery({
    queryKey: [QUERY_KEY.characterInfo, id],
    queryFn: () => fetchCharacterData(id!),
  });

  return { isError, error, data };
};

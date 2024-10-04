import { useQuery } from "@tanstack/react-query";

import fetchCharacterInfo from "@/util/maple/fetchCharacterInfo";
import QUERY_KEY from "@/util/maple/QUERY_KEY";

export const useCharacterQuery = (id: string) => {
  const { data, isError, isLoading } = useQuery({
    queryKey: [QUERY_KEY.characterInfo],
    queryFn: () => fetchCharacterInfo(id),
    enabled: !!id,
    retry: 0,
    refetchOnWindowFocus: false,
  });

  return { isLoading, isError, data };
};

import { useQuery } from "@tanstack/react-query";

import fetchCharacterInfo from "@/util/maple/fetchCharacterInfo";
import QUERY_KEY from "@/util/maple/QUERY_KEY";

export const useCharacterQuery = (id: string) => {
  const { data, isError, isFetching } = useQuery({
    queryKey: [QUERY_KEY.characterInfo],
    queryFn: () => fetchCharacterInfo(id),
    enabled: !!id,
    retry: 0,
    refetchOnWindowFocus: false,
  });

  if (isError) {
    alert("데이터를 가져오는데 실패하였습니다.");
  }

  return { isFetching, isError, data };
};

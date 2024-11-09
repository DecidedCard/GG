import { useEffect } from "react";
import { useRouter } from "next/navigation";

import { useSuspenseQuery } from "@tanstack/react-query";

import useErrorModalStore from "@/store/errorModalStore";

import QUERY_KEY from "@/util/maple/QUERY_KEY";
import {
  fetchBasicCharacterInfo,
  fetchCharacterInfo,
} from "@/util/maple/fetchCharacterInfo";

export const useBasicCharacterQuery = (id: string | null) => {
  const { setIsError, setReset } = useErrorModalStore();
  const navigation = useRouter();

  const { data, isError, isFetching } = useSuspenseQuery({
    queryKey: [QUERY_KEY.characterInfo, id],
    queryFn: () => fetchBasicCharacterInfo(id!),
    retry: 0,
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    if (isError) {
      const onClickHandler = () => {
        setReset();
        navigation.push("/maple");
      };

      setIsError({
        isError: true,
        comment: "검색하는 중에 오류가 생겼습니다.",
        onClickFn: onClickHandler,
      });
    }
  }, [isError, setIsError, setReset, navigation]);

  return { isFetching, isError, data };
};

export const useCharacterQuery = (
  id: string | null,
  type: "stat" | "skill" | "union"
) => {
  const { setIsError, setReset } = useErrorModalStore();
  const navigation = useRouter();

  const { data, isError, isFetching } = useSuspenseQuery({
    queryKey: [QUERY_KEY.characterInfo, id],
    queryFn: () => fetchCharacterInfo(id!, type),
    retry: 0,
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    if (isError) {
      const onClickHandler = () => {
        setReset();
        navigation.push("/maple");
      };

      setIsError({
        isError: true,
        comment: "검색하는 중에 오류가 생겼습니다.",
        onClickFn: onClickHandler,
      });
    }
  }, [isError, setIsError, setReset, navigation]);

  return { isFetching, isError, data };
};

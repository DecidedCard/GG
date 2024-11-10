import { useEffect } from "react";
import { useRouter } from "next/navigation";

import { useSuspenseQuery } from "@tanstack/react-query";

import useErrorModalStore from "@/store/errorModalStore";

import QUERY_KEY from "@/util/maple/QUERY_KEY";
import { fetchCharacterData } from "@/util/maple/fetchCharacterData";

export const useBasicCharacterQuery = (id: string | null) => {
  const { setIsError, setReset } = useErrorModalStore();
  const navigation = useRouter();

  const { data, isError, isFetching } = useSuspenseQuery({
    queryKey: [QUERY_KEY.characterInfo, id],
    queryFn: () => fetchCharacterData(id!),
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
        comment: "캐릭터 검색 중 오류가 발생하였습니다.",
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
    queryKey: [QUERY_KEY.characterInfo, id, type],
    queryFn: () => fetchCharacterData(id!, type),
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
        comment: `${type}을 검색하는 중에 오류가 발생하였습니다.`,
        onClickFn: onClickHandler,
      });
    }
  }, [type, isError, setIsError, setReset, navigation]);

  return { isFetching, isError, data };
};

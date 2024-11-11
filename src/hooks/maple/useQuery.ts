import { useEffect } from "react";
import { useRouter } from "next/navigation";

import { useSuspenseQuery } from "@tanstack/react-query";

import useErrorModalStore from "@/store/errorModalStore";

import QUERY_KEY from "@/util/maple/QUERY_KEY";
import { fetchCharacterData } from "@/util/maple/fetchCharacterData";

export const useBasicCharacterQuery = (id: string | null) => {
  const { setIsError, setReset } = useErrorModalStore();
  const navigation = useRouter();

  const { data, isError, error } = useSuspenseQuery({
    queryKey: [QUERY_KEY.characterInfo, id],
    queryFn: () => fetchCharacterData(id!),
  });

  useEffect(() => {
    if (isError) {
      const onClickHandler = () => {
        setReset();
        navigation.push("/maple");
      };

      setIsError({
        isError: true,
        comment: `${error}`,
        onClickFn: onClickHandler,
      });
    }
  }, [isError, error, setIsError, setReset, navigation]);

  return { isError, data };
};

export const useCharacterQuery = (
  id: string | null,
  type: "stat" | "skill" | "union"
) => {
  const { setIsError, setReset } = useErrorModalStore();
  const navigation = useRouter();

  const { data, isError, error } = useSuspenseQuery({
    queryKey: [QUERY_KEY.characterInfo, id, type],
    queryFn: () => fetchCharacterData(id!, type),
  });

  useEffect(() => {
    if (isError) {
      const onClickHandler = () => {
        setReset();
        navigation.push("/maple");
      };

      setIsError({
        isError: true,
        comment: `${error}`,
        onClickFn: onClickHandler,
      });
    }
  }, [type, isError, error, setIsError, setReset, navigation]);

  return { isError, data };
};

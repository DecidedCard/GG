import { useCallback, useMemo } from "react";

import { useForm, SubmitHandler } from "react-hook-form";

import useCharacterNavigation from "./useNavigation";

import { getCharacterId } from "@/api/maple/axios";

import type { SearchBox } from "@/types/maple/inputForm";

const useSearchInputBox = () => {
  const { register, watch, handleSubmit, formState } = useForm<SearchBox>();

  const { navigationToCharacterInfo } = useCharacterNavigation();

  // form 객체를 useMemo로 메모이제이션
  const form = useMemo(
    () => ({
      register,
      watch,
      handleSubmit,
      formState,
    }),
    [register, watch, handleSubmit, formState]
  );

  // onSubmitSearchHandler 함수를 useCallback으로 메모이제이션
  const onSubmitSearchHandler: SubmitHandler<SearchBox> = useCallback(
    async (data) => {
      try {
        // 캐릭터 id 검색으로 캐릭터가 있는지 검사
        await getCharacterId(data.text);
        navigationToCharacterInfo(data.text, "stat");
      } catch (error) {
        console.error(error);
        alert("캐릭터가 없습니다.");
      }
    },
    [navigationToCharacterInfo]
  );

  return { form, onSubmitSearchHandler };
};

export default useSearchInputBox;

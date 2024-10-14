import { useCallback, useMemo } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import type { SearchBox } from "@/types/maple/inputForm";
import { useRouter } from "next/navigation";
import { getCharacterId } from "@/api/maple/axios";

const useSearchInputBox = () => {
  const { register, watch, handleSubmit, formState } = useForm<SearchBox>();
  const navigation = useRouter();

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
        navigation.push(`/maple/result?character_name=${data.text}`);
      } catch (error) {
        console.error(error);
        alert("캐릭터가 없습니다.");
      }
    },
    [navigation]
  );

  return { form, onSubmitSearchHandler };
};

export default useSearchInputBox;

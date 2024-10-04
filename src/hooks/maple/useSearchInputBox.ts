import { useForm, SubmitHandler } from "react-hook-form";

import type { SearchBox } from "@/types/maple/inputForm";
import { useRouter } from "next/navigation";
import { getCharacterId } from "@/api/maple/axios";

const useSearchInputBox = () => {
  const { register, watch, handleSubmit, formState } = useForm<SearchBox>();
  const navigation = useRouter();

  const form = {
    register,
    watch,
    handleSubmit,
    formState,
  };

  const onSubmitSearchHandler: SubmitHandler<SearchBox> = async (data) => {
    try {
      // 캐릭터 id 검색으로 캐릭터가 있는지 검사
      const res = await getCharacterId(data.text);
      localStorage.setItem("characterId", res.ocid);
      navigation.push(`/maple/result?character_name=${data.text}`);
    } catch (error) {
      console.error(error);
      alert("캐릭터가 없습니다.");
    }
  };

  return { form, onSubmitSearchHandler };
};

export default useSearchInputBox;

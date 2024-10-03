import { useForm, SubmitHandler } from "react-hook-form";

import type { SearchBox } from "@/types/maple/inputForm";
import { useRouter } from "next/navigation";

const useSearchInputBox = () => {
  const { register, watch, handleSubmit, formState } = useForm<SearchBox>();
  const navigation = useRouter();

  const form = {
    register,
    watch,
    handleSubmit,
    formState,
  };

  const onSubmitSearchHandler: SubmitHandler<SearchBox> = (data) => {
    navigation.push(`/maple/result?characterName=${data.text}`);
  };

  return { form, onSubmitSearchHandler };
};

export default useSearchInputBox;

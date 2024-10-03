import { useForm, SubmitHandler } from "react-hook-form";

import type { SearchBox } from "@/types/maple/inputForm";

const useSearchInputBox = () => {
  const { register, watch, handleSubmit, formState } = useForm<SearchBox>();

  const form = {
    register,
    watch,
    handleSubmit,
    formState,
  };

  const onSubmitSearchHandler: SubmitHandler<SearchBox> = (data) => {
    console.log(data);
  };

  return { form, onSubmitSearchHandler };
};

export default useSearchInputBox;

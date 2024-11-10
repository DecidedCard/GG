import { useRouter } from "next/navigation";

import useErrorModalStore from "@/store/errorModalStore";

const useHandleQueryError = (errorMessage: string) => {
  const router = useRouter();
  const { setIsError, setReset } = useErrorModalStore();

  setIsError({
    isError: true,
    comment: errorMessage,
    onClickFn: () => {
      setReset();
      router.push("/maple");
    },
  });
};

export default useHandleQueryError;

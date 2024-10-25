import { create } from "zustand";

import type { ErrObject, ErrorModalStore } from "@/types/store";

const initial: ErrObject = {
  isError: false,
  comment: "",
  onClickFn: () => {},
};

const useErrorModalStore = create<ErrorModalStore>()((set) => ({
  errObj: initial,
  setIsError: (arg) => set(() => ({ errObj: arg })),
  setReset: () => set(() => ({ errObj: initial })),
}));

export default useErrorModalStore;

export interface ErrObject {
  isError: boolean;
  comment: string;
  onClickFn: () => void;
}

export type ErrorModalStore = {
  errObj: ErrObject;
  setIsError: (arg: ErrObject) => void;
  setReset: () => void;
};

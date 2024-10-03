import type { UseFormRegister, FieldValues } from "react-hook-form";

export interface InputProps<T extends FieldValues> {
  size?: "big" | "small";
  type?: "text" | "password";
  placeholder?: string;
  register: UseFormRegister<T>;
  value: string;
}

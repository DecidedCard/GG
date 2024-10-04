import React from "react";

import type { InputProps } from "@/types/commonProps";
import type { FieldValues, Path } from "react-hook-form";

const Input = <T extends FieldValues>({
  size,
  type,
  placeholder,
  register,
  value,
}: InputProps<T>) => {
  const height =
    (size === "big" && "h-14 text-body/22px") ||
    (size === "small" && "h-10 text-body/18px") ||
    "h-10 text-body/18px";

  const inputType =
    (type === "text" && "text") ||
    (type === "password" && "password") ||
    "text";

  return (
    <input
      type={inputType}
      placeholder={placeholder || ""}
      {...register(value as Path<T>)}
      autoComplete="off"
      className={`p-4 w-full ${height} border border-solid border-black rounded-lg focus:outline-none`}
    />
  );
};

export default Input;

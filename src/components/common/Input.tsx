import React from "react";

import { InputProps } from "@/types/commonProps";

const Input = ({ size, type, placeholder }: InputProps) => {
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
      className={`p-4 w-full ${height} border border-solid border-black rounded-lg focus:outline-none `}
    />
  );
};

export default Input;

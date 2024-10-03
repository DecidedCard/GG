import React from "react";

import { InputProps } from "@/types/commonProps";

const Input = ({ size, type, placeholder }: InputProps) => {
  const height =
    (size === "big" && "h-14") || (size === "small" && "h-10") || "h-10";

  const inputType =
    (type === "text" && "text") ||
    (type === "password" && "password") ||
    "text";

  return (
    <input
      type={inputType}
      placeholder={placeholder || ""}
      className={`w-full ${height} rounded-lg focus:outline-none`}
    />
  );
};

export default Input;

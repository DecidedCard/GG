"use client";

import React from "react";

import Input from "@/components/common/Input";

import useSearchInputBox from "@/hooks/maple/useSearchInputBox";

import type { SearchBox } from "@/types/maple/inputForm";

const SearchInputBox = () => {
  const { form, onSubmitSearchHandler } = useSearchInputBox();

  return (
    <div className="flex flex-col justify-center items-center gap-3 w-full h-72">
      <h2 className="text-title/32px font-DungGeunMo text-text-100">
        Good_Game Maple
      </h2>
      <div className="w-[560px] md:w-[80%] sm:w-[70%]">
        <form onSubmit={form.handleSubmit(onSubmitSearchHandler)}>
          <Input<SearchBox>
            size="big"
            placeholder="캐릭터를 입력해주세요."
            register={form.register}
            value="text"
          />
        </form>
      </div>
    </div>
  );
};

export default SearchInputBox;

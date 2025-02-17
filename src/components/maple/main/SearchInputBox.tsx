"use client";

import React, { useState } from "react";

import useCharacterNavigation from "@/hooks/maple/useNavigation";

const SearchInputBox = () => {
  const [characterName, setCharacterName] = useState("");
  const { navigationToCharacterInfo } = useCharacterNavigation();

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCharacterName(e.target.value);
  };

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigationToCharacterInfo(characterName, "stat");
  };

  return (
    <div className="flex flex-col justify-center items-center gap-3 w-full h-72">
      <h2 className="text-title/32px font-DungGeunMo">Good_Game Maple</h2>
      <div className="w-[560px] md:w-[80%] sm:w-[70%]">
        <form onSubmit={onSubmitHandler}>
          <input
            className="p-2 w-full h-10 border border-solid rounded-lg border-secondary-300 focus:outline-none"
            placeholder="이름을 입력해주세요"
            value={characterName}
            onChange={onChangeHandler}
          />
        </form>
      </div>
    </div>
  );
};

export default SearchInputBox;

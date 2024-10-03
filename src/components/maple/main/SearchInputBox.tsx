import React from "react";

import Input from "@/components/common/Input";

const SearchInputBox = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-3 w-full h-96">
      <p className="text-title/32px">게임 캐릭터 검색</p>
      <div className="w-[560px]">
        <Input size="big" placeholder="캐릭터를 입력해주세요." />
      </div>
    </div>
  );
};

export default SearchInputBox;

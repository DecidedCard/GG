import React from "react";

const UnionRankingTitle = () => {
  return (
    <div className="flex justify-between py-1 px-3 w-full text-body/14px rounded sm:text-body/10px">
      <div className="flex justify-between w-40 sm:w-20">
        <p>#</p>
        <p className="w-32 text-center sm:w-16">캐릭터</p>
      </div>
      <div className="flex justify-between w-64 sm:w-40">
        <p className="text-center">유니온 레벨</p>
        <p className="w-32 text-center sm:w-20">직업</p>
      </div>
    </div>
  );
};

export default UnionRankingTitle;

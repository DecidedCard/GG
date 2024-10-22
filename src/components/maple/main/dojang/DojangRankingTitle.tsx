import React from "react";

const DojangRankingTitle = () => {
  return (
    <div className="flex justify-between py-1 px-3 w-full text-body/14px rounded sm:text-body/10px">
      <div className="flex justify-between w-40 sm:w-20">
        <p className="sm:w-8">#</p>
        <p className="w-32 text-center sm:w-11 sm:text-left">캐릭터</p>
      </div>
      <div className="flex justify-between w-96 sm:w-52">
        <p className="sm:w-8">레벨</p>
        <p className="w-32 text-center sm:w-24">직업</p>
        <p className="w-10 text-center sm:w-8">층수</p>
        <p className="w-20 text-center sm:w-16">기록</p>
      </div>
    </div>
  );
};

export default DojangRankingTitle;

import React from "react";

const DojangRankingTitle = () => {
  return (
    <div className="flex justify-between py-1 px-3 w-full text-body/18px rounded">
      <div className="flex justify-between w-40">
        <p>#</p>
        <p className="w-32 text-center">캐릭터</p>
      </div>
      <div className="flex justify-between w-96">
        <p>레벨</p>
        <p className="w-32 text-center">직업</p>
        <p className="w-10 text-center">층수</p>
        <p className="w-20 text-center">기록</p>
      </div>
    </div>
  );
};

export default DojangRankingTitle;

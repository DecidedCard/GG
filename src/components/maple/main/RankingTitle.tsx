import React from "react";

const RankingTitle = () => {
  return (
    <div className="flex justify-between py-1 px-3 w-full text-body/14px rounded sm:text-body/10px">
      <div className="flex justify-between w-40 sm:w-20">
        <p>#</p>
        <p className="w-32 text-center sm:w-16">캐릭터</p>
      </div>
      <div className="flex justify-between w-96 sm:w-52">
        <p>레벨</p>
        <p className="w-32 text-center sm:w-20">직업</p>
        <p className="w-32 text-center sm:w-20">길드</p>
      </div>
    </div>
  );
};

export default RankingTitle;

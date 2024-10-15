"use client";

import React from "react";

import useGameSelector from "@/hooks/useGameSelector";

import ArrowRoundDown from "@/assets/ArrowRoundDown";
import ArrowRoundUp from "@/assets/ArrowRoundUp";

const GameSelector = () => {
  const {
    gameArr,
    isSelectView,
    onClickGameSet,
    onClickIsSelectViewToggleHandler,
    selectGame,
  } = useGameSelector();

  return (
    <div
      onClick={onClickIsSelectViewToggleHandler}
      className="relative flex justify-between items-center p-3 w-48 border border-solid border-text-100 rounded-xl text-body/18px cursor-pointer"
    >
      {selectGame ? selectGame : "전체 게임"}
      {isSelectView ? (
        <ArrowRoundUp className="w-4 h-4" />
      ) : (
        <ArrowRoundDown className="w-4 h-4" />
      )}

      {isSelectView && (
        <div className="absolute left-0 -bottom-12 z-30 border border-solid border-text-200 rounded-lg bg-bg-100">
          {gameArr.map((item) => (
            <div
              key={item.game}
              onClick={() => onClickGameSet(item.game)}
              className="flex items-center p-3 w-48 text-body/18px cursor-pointer"
            >
              {item.game}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default GameSelector;

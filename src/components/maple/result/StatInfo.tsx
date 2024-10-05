"use client";

import React, { useState } from "react";

import DetailStatInfo from "./DetailStatInfo";

import type { CharacterStatInfo } from "@/types/maple/mapleApi";

const StatInfo = ({ info }: { info: CharacterStatInfo }) => {
  const [isView, setIsView] = useState(false);

  const onClickToggle = () => {
    setIsView(!isView);
  };

  return (
    <section className="flex flex-col gap-3">
      <div
        className={`flex flex-col border p-1 w-60 border-solid border-black rounded-lg overflow-hidden ease-in-out duration-150 ${
          isView ? "max-h-[1000px]" : "max-h-[500px]"
        }`}
      >
        <div className="flex items-center gap-3 py-4 px-10 w-fit">
          <div className="w-14 h-14 rounded-full bg-gray-500"></div>
          <div>
            <p className="text-body/18px">전투력</p>
            <p>{info.final_stat[42].stat_value}</p>
          </div>
        </div>
        <div className="flex flex-col gap-1 p-2 border-t border-b border-solid border-black">
          <p>
            {Number(info.final_stat[0].stat_value).toLocaleString("ko-KR")} ~{" "}
            {Number(info.final_stat[1].stat_value).toLocaleString("ko-KR")}
          </p>
          <p className="text-body/14px text-gray-400">스탯 공격력</p>
        </div>
        <div className="grid grid-cols-3 gap-3 p-3 border-b border-solid border-black">
          {info.final_stat.slice(16, 22).map((item) => (
            <ul
              key={item.stat_name}
              className="flex flex-col gap-1 text-gray-400"
            >
              <p className="text-body/14px">{item.stat_value}</p>
              <p className="text-body/10px">{item.stat_name}</p>
            </ul>
          ))}
        </div>
        <DetailStatInfo stat={info.final_stat.slice(2, 8)} />
        <DetailStatInfo stat={info.final_stat.slice(13, 16)} />
        <DetailStatInfo stat={info.final_stat.slice(33, 36)} />
        <DetailStatInfo stat={info.final_stat.slice(36, 38)} />
        <DetailStatInfo
          stat={[
            ...info.final_stat.slice(38, 42),
            info.final_stat[43],
            info.final_stat[30],
          ]}
        />
        <DetailStatInfo stat={info.final_stat.slice(28, 30)} />
        <DetailStatInfo stat={info.final_stat.slice(22, 28)} />
      </div>
      <button
        onClick={onClickToggle}
        className="w-60 h-10 border border-solid border-black rounded-lg"
      >
        {isView ? "접기" : "더보기"}
      </button>
    </section>
  );
};

export default StatInfo;

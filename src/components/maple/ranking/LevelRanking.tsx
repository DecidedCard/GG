import React from "react";
import Link from "next/link";

import ArrowRoundBack from "@/assets/ArrowRoundBack";

import type { OverallRanking } from "@/types/maple/mapleApi";

const LevelRanking = ({
  contents,
  text,
}: {
  contents: OverallRanking[];
  text: string;
}) => {
  console.log(contents);
  return (
    <>
      <h2 className="flex justify-between items-center text-title/20px sm:text-title/12px">
        <Link href={"/maple"}>
          <ArrowRoundBack />
        </Link>
        {text}
      </h2>
      <div className="flex flex-col md:text-body/14px sm:min-w-80 sm:text-body/8px">
        <div className="bg-secondary-300">
          <ol className="flex justify-between items-center text-center">
            <p className="w-12 md:w-8 sm:w-4">#</p>
            <p className="w-28 md:w-18 sm:w-14">캐릭터</p>
            <p className="w-10 md:w-8 sm:w-4">레벨</p>
            <p className="w-28 md:w-18 sm:w-14">직업</p>
            <p className="w-28 md:w-18 sm:w-14">월드</p>
          </ol>
        </div>
        {contents.map((item) => (
          <Link
            href={`/maple/result?character_name=${item.character_name}&type=stat`}
            key={item.ranking}
            className="flex items-center h-10 border-b border-solid border-secondary-300"
          >
            <ol
              key={item.ranking}
              className="flex justify-between items-center w-full text-center"
            >
              <p className="w-12 md:w-8 sm:w-4">{item.ranking}</p>
              <p className="w-28 md:w-18 sm:w-14">{item.character_name}</p>
              <p className="w-10 md:w-8 sm:w-4">{item.character_level}</p>
              <p className="w-28 md:w-18 sm:w-14">
                {item.sub_class_name ? item.sub_class_name : item.class_name}
              </p>
              <p className="w-28 md:w-18 sm:w-14">{item.world_name}</p>
            </ol>
          </Link>
        ))}
      </div>
    </>
  );
};

export default LevelRanking;

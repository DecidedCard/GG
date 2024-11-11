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
  return (
    <>
      <h2 className="flex justify-between text-title/28px sm:text-title/20px">
        <Link href={"/maple"}>
          <ArrowRoundBack />
        </Link>
        {text}
      </h2>
      <div className="flex flex-col gap-4 p-5 bg-bg-200 md:text-body/14px sm:p-2 sm:min-w-80 sm:text-body/8px">
        {contents.map((item) => (
          <Link
            href={`/maple/result/stat?character_name=${item.character_name}`}
            key={item.ranking}
          >
            <ol
              key={item.ranking}
              className="flex justify-between items-center px-4"
            >
              <div className="flex gap-4 text-center">
                <p className="w-12 md:w-8 sm:w-4">{item.ranking}</p>
                <p className="w-28 md:w-18 sm:w-14">{item.character_name}</p>
                <p className="w-10 md:w-8 sm:w-4">{item.character_level}</p>
                <p className="w-28 md:w-18 sm:w-14">
                  {item.sub_class_name ? item.sub_class_name : item.class_name}
                </p>
              </div>
              <div className="flex gap-4 text-center">
                <p className="w-20 md:w-10 sm:w-6">
                  {item.character_popularity}
                </p>
                <p className="w-20 md:w-16 sm:w-10">
                  {item.character_guildname
                    ? item.character_guildname
                    : "길드없음"}
                </p>
              </div>
            </ol>
          </Link>
        ))}
      </div>
    </>
  );
};

export default LevelRanking;

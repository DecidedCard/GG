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
      <h2 className="flex justify-between text-title/28px">
        <Link href={"/maple"}>
          <ArrowRoundBack />
        </Link>
        {text}
      </h2>
      <div className="flex flex-col gap-4 p-5 bg-bg-200">
        {contents.map((item) => (
          <ol
            key={item.ranking}
            className="flex justify-between items-center px-4"
          >
            <div className="flex gap-4 text-center">
              <p className="w-12">{item.ranking}</p>
              <p className="w-28">{item.character_name}</p>
              <p className="w-10">{item.character_level}</p>
              <p className="w-28">
                {item.sub_class_name ? item.sub_class_name : item.class_name}
              </p>
            </div>
            <div className="flex gap-4 text-center">
              <p className="w-20">{item.character_popularity}</p>
              <p className="w-20">
                {item.character_guildname
                  ? item.character_guildname
                  : "길드없음"}
              </p>
            </div>
          </ol>
        ))}
      </div>
    </>
  );
};

export default LevelRanking;

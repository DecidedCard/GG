import React from "react";
import Link from "next/link";

import PageButton from "@/components/maple/ranking/PageButton";
import ArrowRoundBack from "@/assets/ArrowRoundBack";

import { dojangRanking } from "@/api/maple/fetch";

import formatTime from "@/util/formatTime";

const SeedRankingList = async (props: { params: Promise<{ page: number }> }) => {
  const params = await props.params;
  const { ranking } = await dojangRanking();

  const contentsIndex = params.page * 20;
  const contents = [...ranking.slice(contentsIndex - 20, contentsIndex)];

  return (
    <main className="flex flex-col gap-5 p-5 mx-auto w-[1280px] text-text-100 lg:w-full md:w-full sm:w-full">
      <h2 className="flex justify-between text-title/28px md:text-title/20px sm:text-title/16px">
        <Link href={"/maple"}>
          <ArrowRoundBack />
        </Link>
        TODAY 무릉도장 랭킹
      </h2>
      <div className="flex flex-col gap-4 p-5 sm:min-w-80">
        {contents.map((item) => (
          <Link
            href={`/maple/result?character_name=${item.character_name}&type=stat`}
            key={item.ranking}
          >
            <ol
              key={item.ranking}
              className="flex justify-between items-center px-4 md:text-body/14px sm:px-1 sm:text-body/8px"
            >
              <div className="flex gap-4 text-center">
                <p className="w-12 md:w-8 sm:w-4">{item.ranking}</p>
                <p className="w-28 md:w-20 sm:w-14">{item.character_name}</p>
                <p className="w-28 md:w-20 sm:w-14">
                  {item.sub_class_name ? item.sub_class_name : item.class_name}
                </p>
              </div>
              <div className="flex gap-4 text-center">
                <p className="w-20 md:w-16 sm:w-10">
                  {formatTime(item.dojang_time_record)}
                </p>
                <p className="w-20 md:w-10 sm:w-6">{item.dojang_floor}</p>
                <p className="w-20 md:w-16 sm:w-8">{item.world_name}</p>
              </div>
            </ol>
          </Link>
        ))}
      </div>
      <PageButton length={ranking.length} page={params.page} check="dojang" />
    </main>
  );
};

export default SeedRankingList;

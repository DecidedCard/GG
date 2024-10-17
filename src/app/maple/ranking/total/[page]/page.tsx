import React from "react";

import { overallRanking } from "@/api/maple/fetch";
import PageButton from "@/components/maple/ranking/PageButton";

const TotalRanking = async ({ params }: { params: { page: number } }) => {
  const { ranking } = await overallRanking();

  const contentsIndex = params.page * 20;
  const contents = [...ranking.slice(contentsIndex - 20, contentsIndex)];

  return (
    <main className="flex flex-col gap-5 p-5 mx-auto w-[1280px] text-text-100">
      <h2 className="text-title/28px">TODAY 일반월드 랭킹</h2>
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
      <PageButton length={ranking.length} page={params.page} />
    </main>
  );
};

export default TotalRanking;

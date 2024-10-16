import React from "react";

import { overallRanking } from "@/api/maple/fetch";

const TotalRanking = async () => {
  const { ranking } = await overallRanking();
  const contents = [...ranking.slice(0, 20)];
  console.log(contents);
  return (
    <main className="p-5 mx-auto w-[1280px] text-text-100">
      <h2>TODAY 일반월드 랭킹</h2>
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
            <div className="flex gap-4">
              <p>{item.character_popularity}</p>
              {item.character_guildname && <p>{item.character_guildname}</p>}
            </div>
          </ol>
        ))}
      </div>
    </main>
  );
};

export default TotalRanking;

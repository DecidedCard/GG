import React from "react";
import Image from "next/image";

import ServerImage from "../ServerImage";

import type { Basic } from "@/types/maple/mapleApi";
import JopImage from "../JopImage";

const BasicInfo = ({
  info,
  popularity,
}: {
  info: Basic;
  popularity: number;
}) => {
  return (
    <div className="relative flex items-center py-10 px-20 w-full h-[400px] bg-gradient-to-r from-bg-200 to-bg-300 rounded-lg overflow-hidden">
      <div className="absolute -top-28 right-0 opacity-10">
        <JopImage jop={info.character_class} />
      </div>
      <div className="flex gap-3 z-10">
        <div className="flex flex-col gap-1">
          <Image
            src={info.character_image}
            alt="character_image"
            width={150}
            height={100}
          />
          <p className="text-body/18px">
            {info.access_flag
              ? "최근 7일동안 접속했습니다!"
              : "최근 7일동안 접속하지 않았습니다."}
          </p>
          <p className="text-body/14px text-gray-400">
            since: {info.character_date_create.slice(0, 10)}
          </p>
        </div>

        <div className="flex flex-col">
          <div className="flex items-center gap-3">
            <p className="text-title/28px">{info.character_name}</p>
            <p className="flex items-center gap-2 py-1 px-2 h-fit text-body/14px bg-gray-200 rounded-3xl">
              <span className="w-4">
                <ServerImage server={info.world_name} />
              </span>
              {info.world_name}
            </p>
          </div>
          <div className="flex gap-3 text-body/14px text-gray-400">
            <p>Lv.{info.character_level}</p>
            <p>{info.character_class}</p>
            <p>인기도 {popularity}</p>
            <p>{info.character_guild_name}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicInfo;

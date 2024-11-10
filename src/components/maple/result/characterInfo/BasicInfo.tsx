import React from "react";
import Image from "next/image";

import FavoriteCheck from "../FavoriteCheck";
import JopImage from "../../JopImage";
import ServerImage from "../../ServerImage";
import CashItemCard from "./CashItemCard";

import type { Basic } from "@/types/maple/mapleApi";
import type { CashItem } from "@/types/maple/cashItem";

const BasicInfo = ({
  info,
  popularity,
  cashItem,
}: {
  info: Basic;
  popularity: number;
  cashItem: CashItem;
}) => {
  return (
    <div className="relative flex items-center gap-5 py-10 px-20 w-full h-[400px] bg-bg-200 rounded-lg overflow-hidden md:px-10 sm:px-5 sm:flex-col sm:justify-evenly">
      <FavoriteCheck character={info.character_name} />
      <div className="absolute top-0 right-0 opacity-50">
        <div className="relative w-[500px] h-[411px]">
          <JopImage jop={info.character_class} />
        </div>
      </div>
      <div className="flex gap-3 z-10">
        <div className="flex flex-col gap-1">
          <Image
            src={info.character_image}
            alt="character_image"
            width={150}
            height={100}
            className="w-auto"
          />
          <p className="text-body/18px md:text-body/10px sm:text-body/8px">
            {info.access_flag
              ? "최근 7일동안 접속했습니다!"
              : "최근 7일동안 접속하지 않았습니다."}
          </p>
          <p className="text-body/14px text-gray-400 md:text-body/10px sm:text-body/8px">
            since: {info.character_date_create.slice(0, 10)}
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-3">
            <p className="text-title/28px md:text-title/16px sm:text-title/12px">
              {info.character_name}
            </p>
            <p className="flex items-center gap-2 py-2 px-3 h-fit text-body/14px whitespace-nowrap bg-bg-100 rounded-3xl md:text-body/10px sm:text-body/8px">
              <span className="w-4 md:w-3 sm:w-2">
                <ServerImage server={info.world_name} />
              </span>
              {info.world_name}
            </p>
          </div>
          <div className="flex gap-3 text-body/14px text-gray-400 md:text-body/10px sm:text-body/8px">
            <p>Lv.{info.character_level}</p>
            <p>{info.character_class}</p>
            <p>인기도 {popularity}</p>
            <p>{info.character_guild_name}</p>
          </div>
        </div>
      </div>
      <CashItemCard cashItem={cashItem} />
    </div>
  );
};

export default BasicInfo;

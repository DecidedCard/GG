"use client";

import React from "react";
import Link from "next/link";

import BasicInfo from "@/components/maple/result/BasicInfo";
import StatInfo from "@/components/maple/result/StatInfo";
import ItemList from "@/components/maple/result/item/ItemList";
import SkillList from "./skill/SkillList";
import InfoNav from "./InfoNav";
import ArrowRoundBack from "@/assets/ArrowRoundBack";
import SymbolList from "./symbol/SymbolList";
import LinkSkillList from "./skill/LinkSkillList";
import UnionArtifact from "./union/UnionArtifact";
import UnionRaider from "./union/UnionRaider";

import useResult from "@/hooks/maple/result/useResult";

const CharacterInfo = () => {
  const { info, query, onClickCharacterInfoSet } = useResult();

  return (
    query.data && (
      <div className="relative flex flex-col gap-4 mt-5 mx-auto w-[1280px] h-[3000px] text-text-100 lg:w-full md:w-full sm:w-full sm:h-[10000px]">
        <Link href={"/maple"} className="absolute top-4 left-4 z-20">
          <ArrowRoundBack className="w-9 h-9 text-primary-200 cursor-pointer sm:w-6 sm:h-6" />
        </Link>
        <BasicInfo
          info={query.data.basicInfo}
          popularity={query.data.popularityInfo.popularity}
          cashItem={query.data.cashItemInfo}
        />
        <InfoNav
          info={info}
          onClickCharacterInfoSet={onClickCharacterInfoSet}
        />
        <div className="mx-auto w-[1280px] md:w-full sm:w-full">
          {info === "stat" && (
            <div className="flex gap-3 sm:flex-col">
              <StatInfo info={query.data.statInfo} />
              <ItemList item={query.data.itemInfo} />
            </div>
          )}
          {info === "skill" && (
            <div className="flex flex-col gap-5 w-[1280px] md:w-full sm:w-full">
              <SkillList skillInfo={query.data.sixthSkillInfo} />
              <SkillList skillInfo={query.data.fifthSkillInfo} />
              <SymbolList item={query.data.symbolInfo} />
              <LinkSkillList item={query.data.linkSkill} />
            </div>
          )}
          {info === "union" && (
            <div className="flex flex-col gap-5 w-[1280px] md:w-full sm:w-full">
              <UnionArtifact
                artifact={query.data.unionArtifact}
                level={query.data.union.union_artifact_level}
              />
              <UnionRaider
                raider={query.data.unionRaider}
                unionInfo={query.data.union}
              />
            </div>
          )}
        </div>
      </div>
    )
  );
};

export default CharacterInfo;

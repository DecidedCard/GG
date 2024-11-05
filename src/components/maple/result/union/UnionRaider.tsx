import React from "react";

import RaiderGrid from "./RaiderGrid";
import JopImage from "../../JopImage";
import UnionRaiderNavBar from "./UnionRaiderNavBar";

import useUnionRaider from "@/hooks/maple/result/useUnionRaider";

import type {
  UnionCharacterInfo,
  UnionRaiderCharacterInfo,
} from "@/types/maple/union";

const UnionRaider = ({
  raider,
  unionInfo,
}: {
  raider: UnionRaiderCharacterInfo;
  unionInfo: UnionCharacterInfo;
}) => {
  const { preset, presetNumber, onClickNavHandler } = useUnionRaider(raider);

  return (
    <section className="flex flex-col gap-4 p-4 bg-bg-200 rounded-lg">
      <h3 className="flex justify-between items-center text-title/24px md:text-title/20px sm:text-title/16px">
        유니온 공격대
        <UnionRaiderNavBar
          raider={raider}
          presetNumber={presetNumber}
          onClickNavHandler={onClickNavHandler}
        />
      </h3>
      <hr className="border-text-200" />
      <div className="flex gap-4 mx-auto md:flex-col sm:flex-col">
        <RaiderGrid item={preset.union_block} />
        <div className="flex flex-wrap justify-between items-center gap-4 w-[300px]">
          {preset.union_block.map((item) => (
            <div
              key={item.block_class}
              className="flex gap-1 w-[140px] text-body/14px"
            >
              <div className="w-8">
                <JopImage jop={item.block_class} />
              </div>
              <div>
                <p>{item.block_class}</p>
                <p>Lv.{item.block_level}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="w-[300px]">
          <div className="flex gap-3">
            <p className="text-title/20px md:text-title/16px sm:text-title/12px">
              {unionInfo.union_grade}
            </p>
            <p className="text-text-200 md:text-body/14px sm:text-body/10px">
              Lv.{unionInfo.union_level}
            </p>
          </div>
          <hr className="w-full border-text-200" />
          <div className="flex justify-between p-1">
            <div className="flex flex-col gap-1 w-[140px]">
              <p className="text-title/16px sm:text-title/12px">
                공격대원 효과
              </p>
              {preset.union_raider_stat.map((item, idx) => (
                <p
                  key={idx}
                  className="ml-1 text-body/14px md:text-body/10px sm:text-body/8px"
                >
                  {item}
                </p>
              ))}
            </div>
            <div className="flex flex-col gap-1 w-[140px]">
              <p className="text-title/16px sm:text-title/12px">
                공격대 점령 효과
              </p>
              {preset.union_occupied_stat.map((item, idx) => (
                <p
                  key={idx}
                  className="ml-1 text-body/14px md:text-body/10px sm:text-body/8px"
                >
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UnionRaider;
